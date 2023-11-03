import { Injectable } from '@angular/core';
import { ExerciceI, ProgrammeI } from '../../partage/modeles/Types';
import { DonneesService } from '../../partage/services/donnees.service';

@Injectable({
  providedIn: 'root',
})
export class KineService {

  listeProgrammes:Array<ProgrammeI> = [];
  listeExos:Array<ExerciceI> = [];

  constructor(public get:DonneesService) {}

  getProgrammes(){
    return this.get.getJsonData('kine-programmes');
  }
  getExercices()  {
    this.get.getJsonData('kine-exos').subscribe(e => this.listeExos = e);
  };

}
