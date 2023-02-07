import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActualiteI } from '../modeles/types';

@Injectable({
  providedIn: 'root'
})
export class InfosService {
// Tableau actualités

actualites:Array<ActualiteI> = [];
infos!:any[];
  constructor(private http:HttpClient) { 
   
  }
  getActus(){
    this.http.get<Array<ActualiteI>>('assets/data/actualites.json').subscribe(
      {
        next: (actus) => {this.actualites = actus},
        error: er => console.log(er),
        complete: () => console.log('done')
      }
    )
  }
}
