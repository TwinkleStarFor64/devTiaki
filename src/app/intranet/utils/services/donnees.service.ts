import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BottomI, CiqualI, MesPlatsI } from '../modeles/Types';

@Injectable({
  providedIn: 'root',
})
export class DonneesService {
  ciqual: Array<CiqualI> = []; //Je déclare ici un tableau
  plats: Array<MesPlatsI> = [];
  mesPlats: Array<MesPlatsI> = [];
  bottoms:any;
  bottom:Array<BottomI> = [];

  constructor(private http: HttpClient) { }
  /* Récupérer les données du fichier ciqual.json */
  getCiqual() {
    //Après le get je déclare un tableau comme pour la variable ligne 11
    this.http.get<Array<CiqualI>>('assets/data/ciqual.json').subscribe(
      //Je récupére mon tableau Json et j'y subscribe
      {
        next: (r) => (this.ciqual = r), //Variable ciqual ligne 10
        error: (er) => console.log(er), //Si une erreur
        complete: () => console.log(this.ciqual), //Si la méthode fonctionne
      }
    );
    return this.ciqual;
  }
  /* Récupérer mes plats */
  getMesPlats() {
    this.http.get<Array<MesPlatsI>>('assets/data/plats.json').subscribe({
      next: (response) => (this.plats = response),
      error: (er) => console.log(er),
      complete: () => console.log(this.plats),
    });
  };
  /* Récupérer la liste des pieds de pages */
  getBottoms() {
    return this.http.get<any>('assets/data/bottoms.json');
  }
  /** Définir le menu actif selon la page affichée */
  setBottom(menu:string){
    this.bottom = this.bottoms[menu];
  }
}
