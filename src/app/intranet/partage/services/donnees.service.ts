import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccueilI, NavI, JournalI, TherapeuteI } from '../modeles/Types';
import { createClient, PostgrestSingleResponse, SupabaseClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DonneesService {
  // Gestion des sous menus des thèmes nutrition, opto et kiné
  listeSousMenus: any;
  sousMenu$: BehaviorSubject<Array<NavI>> = new BehaviorSubject([] as Array<NavI>);
  sousMenu: Array<NavI> = [];

  accueilModule: Array<AccueilI> = [];

  // Données stockées de l'application
  therapeutes: Array<TherapeuteI> = [];

  private supabase: SupabaseClient; // Instance du client Supabase
  historiqueJournal: Array<JournalI> = [];

  constructor(private http: HttpClient) {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
    this.getSousMenus(); // Récupérer la liste des menus
  }
  /** Récupérer les données de l'accueil */
  getAccueil(fichier: string) {
    if(fichier.indexOf('..') === -1) this.http.get<Array<AccueilI>>('assets/data/' + fichier + '-accueil.json').subscribe(
      {
        next: r => {
          this.accueilModule = r.sort((a, b) => a.id - b.id);
        },
        error: er => console.log(er),
        complete: () => console.log(this.accueilModule)
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
    // Enchainer en récupérant les thérapeutes
    this.getTherapeutes();
  }
  /** Appeler la liste des aidants dans Supabase */
  async getAidant() {
    return await this.supabase.from('aidant').select('id, nom');
  }
  /** Appeler la liste des journaux */
  async getHistoriqueJournal() {
    return await this.supabase
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
    return await this.supabase
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
    const { data: currentData, error: currentError } = await this.supabase
      .from('journalEvenement')
      .select('id, date, objet, description, commentaire, groupeEvenement (*)')
      .eq('id', id);

    if (currentData) {
      currentData.forEach((journal) => {
        // forEach car je reçois un tableau
        console.log('journal.objet - supabase.service :', journal.objet);
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
    const evaluation = await this.supabase.from('evaluation').select('*');
    //console.log(evaluation);
    return evaluation;
  }

  /**
   * Méthode pour récupérer l'id d'une évaluation
   * @param id
   * @returns
   */
  async getEvaluationById(id: number) {
    const { data, error } = await this.supabase
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
    return await this.supabase
      .from('message')
      .select(
        'id, medecin, activite, objet, echange, groupeMessage (id), date'
      );
  }
  /** Récupérer la liste des thérapeutes */
  getTherapeutes() {
    this.http.get<Array<TherapeuteI>>('assets/data/therapeutes.json').subscribe({
      next: (t) => this.therapeutes = t,
      error: er => console.log(er),
      complete: () => console.log("Thérapeutes chargés")
    });
  }
  /** Récupérer un fichier json */
  getJsonData(fichier: string):Observable<any> {
    console.log("Chargement des exercices");
    if (fichier.indexOf('..') === -1) {
      return this.http.get('assets/data/' + fichier + '.json')
    }
    else {
      return new Observable();
    }
  };
}
