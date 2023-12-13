import { Injectable } from '@angular/core';
import { ExerciceI, ExoPogrammeI } from '../../partage/modeles/Types';
import { DonneesService } from '../../partage/services/donnees.service';

@Injectable({
  providedIn: 'root',
})
export class OptoService {

  listeProgrammes:Array<ExoPogrammeI> = [];
  listeExos:Array<ExerciceI> = [];

  constructor(public get:DonneesService) {}

  getProgrammes(){
    return this.get.getJsonData('opto-programmes');
  }
  getExercices()  {
    this.get.getJsonData('opto-exos').subscribe(e => this.listeExos = e);
  };
}
