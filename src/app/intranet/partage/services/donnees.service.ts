import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccueilI, NavI, JournalI, TherapeuteI, CheriI, AidantI } from '../../../partage/modeles/Types';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ConnexionService } from 'src/app/partage/services/connexion.service';
import { UtilsService } from 'src/app/partage/services/utils.service';
import { InfosService } from 'src/app/partage/services/infos.service';

@Injectable({
  providedIn: 'root'
})
export class DonneesService {
  // Gestion des sous menus des thèmes nutrition, opto et kiné
  listeSousMenus: any;
  sousMenu: Array<NavI> = [];

  accueilModule: Array<AccueilI> = [];

  // Données stockées de l'application
  therapeutes: Array<TherapeuteI> = [];
  cheris: Array<CheriI> = []; // Liste des chéris

  profil!: AidantI;

  public supa: SupabaseClient; // Instance du client Supabase
  historiqueJournal: Array<JournalI> = [];

  constructor(private http: HttpClient, private conn: ConnexionService, private utils: UtilsService, private l: InfosService) {
    this.supa = createClient(environment.supabaseUrl, environment.supabaseKey);
    this.getSousMenus(); // Récupérer la liste des menus
  }
  /** Récupérer les données du profil de la personne identifiée
   * L'utilisation des alias permet d'identifier un tableau relié (ex. cheris) ou un enfant à aplatir dans la réponse
  */
  getProfilAidant() {
    if (!sessionStorage.getItem('profil')) {
      this.supa.from('aidants')
        .select(`*,
          infos:utilisateurs(*, roles:attribuerRoles!attribuerRoles_idUtilisateur_fkey(enfant:roles(role))),
          cheris:attribuerCheris!attribuerCheris_idAidant_fkey(enfant:cheris(*))
      `)
        .eq('utilisateur', this.conn.user.id)
        .then(({ data, error }) => {
          this.profil = this.utils.flatChilds(data as Array<any>, 'enfant')[0];
          console.log("Données du profil récupéré", this.conn.user);
          this.l.setSession('profil', this.profil); // Sauvegarde de l'aidant dans la session
          // if (error) this.l.erreur("Erreur dans le chargement des données du profil", error);
        });
    } else {
      this.profil = this.l.getSession('profil');
      console.log("Profil de la session", this.profil);
    }
  }
  // Récupérer les utilisateurs sur la table public.utilisateur
  async getListeUtilisateurs() {
    return await this.supa
      .from('utilisateur')
      .select("*, roles:attribuerRole!inner(roles(role))")
    // .select("*, roles:attribuerRoles!inner(id, roles!inner(role))")
  }

  /** Récupérer les données de l'accueil */
  getAccueil(fichier: string) {
    if (fichier.indexOf('..') === -1) this.http.get<Array<AccueilI>>('assets/data/' + fichier + '-accueil.json').subscribe(
      {
        next: r => {
          this.accueilModule = r.sort((a, b) => a.id - b.id);
        },
        error: er => console.log(er),
        complete: () => console.log("Données de l'accueil chargées")
      }
    );
  }
  /** Récupérerles menus en JSON */
  getSousMenus(id: string = 'opto') {
    if (!this.listeSousMenus) {
      this.http.get("assets/data/menus.json").subscribe(m => {
        this.listeSousMenus = m;
        this.sousMenu = this.listeSousMenus[id];
      })
    } else {
      this.sousMenu = this.listeSousMenus[id];
    };
    console.log("SOus menus appelés");
    this.getProfilAidant();
  }
  /** Appeler la liste des journaux */
  async getHistoriqueJournal() {
    return await this.supa
      .from('journalEvenement')
      .select(
        'id, date, objet, description, commentaire, groupeEvenement (id)'
      );
  }
  /** Récupérer les journaux liés */
  async getHistoriqueLinkedJournal(
    groupeEvenementId: number,
    journalEvenementId: number
  ) {
    /** Renvoi tous les journaux qui sont liés au groupe sauf celui "jounalEvenementId" */
    return await this.supa
      .from('journalEvenement') //La table journalEvenement
      .select('id, date, objet, description, commentaire, groupeEvenement (id)')
      .eq('groupeEvenement (id)', groupeEvenementId)
      .neq('id', journalEvenementId);
  }

  /**
   * Récupérer les données d'un journal
   * @param id Id du journal à récupérer
   * @returns Renvoie un journal
   */
  async getCurrentJournal(id: number) {
    // l'ID va être dynamique quand j'appelle ma méthode dans le component
    const { data: currentData, error: currentError } = await this.supa
      .from('journalEvenement')
      .select('id, date, objet, description, commentaire, groupeEvenement (*)')
      .eq('id', id);

    if (currentData) {
      currentData.forEach((journal) => {
        // forEach car je reçois un tableau
        console.log('journal.objet - supa.service :', journal.objet);
      });
      return currentData;
    }
    throw new Error("Les données n'ont pas été trouvées pour cet ID.");
  }
  /**
   * Méthode pour récupérer la table Evaluation
   * @returns Renvoie les évaluations
   */
  async getEvaluation() {
    const evaluation = await this.supa.from('evaluation').select('*');
    return evaluation;
  }

  /**
   * Méthode pour récupérer l'id d'une évaluation
   * @param id
   * @returns
   */
  async getEvaluationById(id: number) {
    const { data, error } = await this.supa
      .from('evaluation')
      .select('id')
      .eq('id', id)
      .single();
    console.log(data);

    if (error) {
      console.log(error);
      throw error;
    }
    return data;
  }

  /** Méthodes de la page de la messagerie */
  /**
   * Récupération des ancien message
   * @returns
   */
  async getHistoriqueMessage() {
    return await this.supa
      .from('message')
      .select(
        'id, medecin, activite, objet, echange, groupeMessage (id), date'
      );
  }
  /** Récupérer la liste des thérapeutes */
  // getTherapeutes() {
  //   this.http.get<Array<TherapeuteI>>('assets/data/therapeutes.json').subscribe({
  //     next: (t) => this.therapeutes = t,
  //     error: er => console.log(er),
  //     complete: () => console.log("Thérapeutes chargés")
  //   });
  // }
  /** Récupérer un fichier json */
  getJsonData(fichier: string): Observable<any> {
    console.log("Chargement des exercices");
    if (fichier.indexOf('..') === -1) {
      return this.http.get('assets/data/' + fichier + '.json')
    }
    else {
      return new Observable();
    }
  };
}
