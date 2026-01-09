import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CiqualI, MesPlatsI } from '../modeles/Types';

@Injectable({
  providedIn: 'root',
})
export class DonneesService {
  ciqual: Array<CiqualI> = []; //Je déclare ici un tableau
    plats: Array<MesPlatsI> = [];
    mesPlats: Array<MesPlatsI> = [];
  
    constructor(private http: HttpClient) {}
  
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
  
    getMesPlats() {
      this.http.get<Array<MesPlatsI>>('assets/data/plats.json').subscribe({
        next: (response) => (this.plats = response),
        error: (er) => console.log(er),
        complete: () => console.log(this.plats),
      });
    }
}
