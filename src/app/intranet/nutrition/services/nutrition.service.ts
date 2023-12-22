import { Injectable } from '@angular/core';
import { CiqualI, MenuI, PlatI, ExoPogrammeI } from '../../partage/modeles/Types';
import { DonneesService } from '../../partage/services/donnees.service';
import { InfosService } from 'src/app/partage/services/infos.service';
import { UtilsService } from '../../../partage/services/utils.service';

@Injectable({
  providedIn: 'root'
})
export class NutritionService {

  listeProgrammes: Array<ExoPogrammeI> = []; // Liste des programmes nutritionnels tirés de la base de données
  listeMenus: Array<MenuI> = []; // Liste des menus récupérée depuis la base de données
  listePlats: Array<PlatI> = []; // Liste des plats récupérée depuis la base de données
  ciqual!: Array<CiqualI>; // La base Ciqual tirée du fichier JSON
  /**
   *
   * @param get Etablir des requêtes d'appels vers la base
   * @param l Gestion des traductions
   * @param utils Code partagé avec des fonctions utilitaires
   */
  constructor(public get: DonneesService, public l: InfosService, private utils:UtilsService) {
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
    this.get.supa.from('menus')
    .select(`*, encas:attribuerMenusEncas!attribuerMenusEncas_idMenu_fkey(enfant:plats(*)),
                ptitdejs:attribuerMenusPtitDejs!attribuerMenusPtitDejs_idMenu_fkey(enfant:plats(*)),
                dejs:attribuerMenusDejs!attribuerMenusDejs_idMenu_fkey(enfant:plats(*)),
                gouters:attribuerMenusGouters!attribuerMenusGouters_idMenu_fkey(enfant:plats(*)),
                diners:attribuerMenusDiners!attribuerMenusDiners_idMenu_fkey(enfant:plats(*))`)
      .then(({ data, error }) => {
        this.listeMenus = this.utils.flatChilds(data!, 'enfant');
        console.log("Menus récupérés", this.listeMenus);
        if (error) this.l.erreur("Erreur dans le chargement des données des menus", error);
      });
  };
  /** Récupérer la liste des plats */
  // Exemple de recquête : .select('*, enfant:utilisateurs(*), cheris:attribuerCheris!attribuerCheris_idAidant_fkey(enfant:cheris(*, enfant:utilisateurs(*)))')
  getPlats() {
    this.get.supa.from('plats')
      .select('*, types:attribuerPlatsTypes!attribuerPlatsTypes_idPlat_fkey(enfant:platsTypes(*))')
      .then(({ data, error }) => {
        this.listePlats = data as Array<PlatI>;
        this.listePlats.forEach( plat => {
          plat.types = this.utils.flatEnfants(plat.types!, 'enfant');
        });
        console.log("Plats récupérés", this.listePlats);
        if (error) this.l.erreur("Erreur dans le chargement des données du profil", error);
      });
  };
}
