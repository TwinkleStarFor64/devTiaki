import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ActualiteI } from '../modeles/types';
import { TradI } from '../modeles/types';

@Injectable({
  providedIn: 'root'
})
export class InfosService {
  t!: TradI; // La traductions des contenus des pages
  ariane: Array<{ path: string, titre: string, classe: string, picto?:string }> = []; // Les chemins du fil d'ariane créée lors du changement de route

  actualites: Array<ActualiteI> = []; // Liste des actualités partagées
  infos!: any[];
  lang:string = 'fr';
  /**
   * Initialisation du service
   * @param http instance de la classe HttpClient
   */
  http: HttpClient = inject(HttpClient);
  
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
  /** Récupérer les textes en fonction de la langue de l'utilisateur */
  getTraductions() {
    console.log("On va tenter les traductions");
    this.http.get<TradI>(`assets/data/langues/${this.lang}/trad.json`).subscribe({
      next: t => this.t = t,
      error: er => console.log(er),
      complete: () => console.log("Textes traduits chargés")
    })
  }
  /** Récupérer la classe en fonction de la route envoyée */
  setClasse(url: string): string {
    if (url.indexOf('opto') !== -1) {
      return 'opto';
    } else if (url.indexOf('kine') !== -1) {
      return 'kine';
    } else if (url.indexOf('nutrition') !== -1) {
      return 'nutrition';
    } else {
      return '';
    }
  }
}
