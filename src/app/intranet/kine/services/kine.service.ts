import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccueilI, ExerciceI } from '../../partage/modeles/Types';

@Injectable({
  providedIn: 'root',
})
export class KineService {

  listeExos:Array<ExerciceI> = [];
  accueil:Array<AccueilI> = [];

  constructor(private http: HttpClient) {}

  getExercicesKine()  {
    console.log("Chargement des exercices");
    return this.http.get<ExerciceI[]>('assets/data/kine-exos.json');
  };
  getAccueil(){
    this.http.get<Array<AccueilI>>('assets/data/kine-accueil.json').subscribe(
      {
        next:r => this.accueil = r,
        error:er => console.log(er),
        complete: () => console.log(this.accueil)
      }
    );
  }
}
