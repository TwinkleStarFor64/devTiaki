import { Injectable } from '@angular/core';
import { CiqualI, MenuI, PlatI, ExoPogrammeI } from '../../partage/modeles/Types';
import { DonneesService } from '../../partage/services/donnees.service';

@Injectable({
  providedIn: 'root'
})
export class NutritionService {

  listeProgrammes: Array<ExoPogrammeI> = [];
  listeMenus: Array<MenuI> = [];
  listePlats: Array<PlatI> = [];
  ciqual!: Array<CiqualI>;

  constructor(public get: DonneesService) {
    if(!this.ciqual) this.getCiqual();
  }
  /** Récupérer la liste des ingrédients */
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
  getIngredient(code:number){
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
  getPlats() {
    if (this.listePlats.length == 0) {
      this.get.getJsonData('nutrition-plats').subscribe(
        {
          next: m => this.listeMenus = m,
          error: er => console.log(er),
          complete: () => console.log("Données chargées")
        }
      );
    }
  };
}
