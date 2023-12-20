import { Injectable } from '@angular/core';
import { CiqualI, MenuI, PlatI, ExoPogrammeI } from '../../partage/modeles/Types';
import { DonneesService } from '../../partage/services/donnees.service';
import {
  createClient,
  SupabaseClient,
} from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';
import { InfosService } from 'src/app/partage/services/infos.service';

@Injectable({
  providedIn: 'root'
})
export class NutritionService {

  listeProgrammes: Array<ExoPogrammeI> = []; // Liste des programmes nutritionnels tirés de la base de données
  listeMenus: Array<MenuI> = []; // Liste des menus récupérée depuis la base de données
  listePlats: Array<PlatI> = []; // Liste des plats récupérée depuis la base de données
  ciqual!: Array<CiqualI>; // La base Ciqual tirée du fichier JSON

  private supabase: SupabaseClient; // Instance du client Supabase

  constructor(public get: DonneesService, public l:InfosService) {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
    if (!this.ciqual) this.getCiqual();
  }
  /** Récupérer la liste des ingrédients depuis le fichier JSON */
  getCiqual() {
    this.get.getJsonData('ciqual').subscribe(
      {
        next: c => this.ciqual = c,
        error: er => console.log(er),
        complete: () => console.log("Données Ciqual chargées")
      }
    );
  }
  /** Récupérer un ingrédient à partir de son alim_code */
  getIngredient(code: number) {
    return this.ciqual.find(c => c.alim_code == code);
  }
  // Récupérer la liste des programmes alimentaires
  getProgrammes() {
    this.get.getJsonData('nutrition-programmes').subscribe(
      {
        next: d => console.log(d),
        error: er => console.log(er),
        complete: () => console.log("Données chargées")
      }
    );
  }
  /** Récupérer la liste des menus disponibles */
  getMenus() {
    this.get.getJsonData('nutrition-menus').subscribe(
      {
        next: m => this.listeMenus = m,
        error: er => console.log(er),
        complete: () => console.log("Données chargées")
      }
    );
  };
  /** Récupérer la liste des plats */
  // Exemple de recquête : .select('*, enfant:utilisateurs(*), cheris:attribuerCheris!attribuerCheris_idAidant_fkey(enfant:cheris(*, enfant:utilisateurs(*)))')

  getPlats() {
    this.supabase.from('plats')
      .select('*')
      .then(({data, error}) => {
        console.log("Données du profil récupéré", data);
        this.listePlats = data as Array<PlatI>;
        if (error) this.l.erreur("Erreur dans le chargement des données du profil", error);
      });
  };
}
