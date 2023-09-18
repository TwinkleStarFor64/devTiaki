import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActualiteI } from '../modeles/types';

@Injectable({
  providedIn: 'root'
})
export class InfosService {
  // Tableau actualités

  actualites: Array<ActualiteI> = []; // Liste des actualités partagées
  infos!: any[];
  /**
   * Initialisation du service
   * @param http instance de la classe HttpClient
   */
  constructor(private http: HttpClient) { }
  /** Récupérer les actualités dans le fichier json local */
  getActus() {
    this.http.get<Array<ActualiteI>>('assets/data/actualites.json').subscribe(
      {
        next: (actus) => { this.actualites = actus },
        error: er => console.log(er),
        complete: () => console.log('done')
      }
    )
  }
}
