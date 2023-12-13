import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit, inject } from '@angular/core';
import { CheriI } from '../modeles/Types';

@Injectable({
  providedIn: 'root'
})
export class CheriService implements OnInit {

  infos:any;
  sante:any;
  contact:any;
  profils:Array<CheriI> = [];

  http:HttpClient = inject(HttpClient);

  ngOnInit(){
    this.getCheris();
  }

  /** Récupérer les données du chérichéri */
  getCheris(){
    this.http.get<Array<CheriI>>('assets/data/profil.json').subscribe(
      {
        next:p => this.profils = p,
        error:e => console.log(e),
        complete: () => console.log('Profils chargés')
      }
    )
  }
}
