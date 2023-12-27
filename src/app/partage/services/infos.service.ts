import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActualiteI } from '../modeles/types';
import { ConnexionService } from './connexion.service';

@Injectable({
  providedIn: 'root'
})
export class InfosService {
  t: any; // La traductions des contenus des pages
  ariane: Array<{ path: string, titre: string, classe: string, picto?:string }> = []; // Les chemins du fil d'ariane créée lors du changement de route

  actualites: Array<ActualiteI> = []; // Liste des actualités partagées
  infos!: any[];
  /**
   * Initialisation du service
   * @param http instance de la classe HttpClient
   */
  constructor(private http: HttpClient) {
    if(!this.infos) this.getTraductions();
  }
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
    this.http.get("assets/data/langues/fr/fr_FR.json").subscribe({
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
  /**
   * Afficher les erreurs dans l'interface
   * @param msg {string} Message à montrer dans l'interface utilisateur
   */
  erreur(msg:string, er:unknown){
    console.log(msg, er);
    if(typeof er !== 'string') er = JSON.stringify(er);
    throw new Error(msg + ' : \n' + er);
  }
  /**
   * Récupérer les données de connexion dans la session
   * @param key Clé de la données à récupérer dans la session
   */
  getSession(key:string){
    if(sessionStorage.getItem(key)) return JSON.parse(sessionStorage.getItem(key)!);
  }
  /**
   * Ecrire des données dans la session
   * @param key CLé à écrire dans la session
   * @param data Données attachées à la clé écrite
   */
  setSession(key:string, data:any){
    sessionStorage.setItem(key, JSON.stringify(data));
  }
}
