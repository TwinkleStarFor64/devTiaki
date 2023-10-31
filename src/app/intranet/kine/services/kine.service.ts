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
    this.get.getJsonData('kine-programmes').subscribe(p => this.listeProgrammes = p);
  }
  getExercices()  {
    this.get.getJsonData('kine-exos').subscribe(e => this.listeExos = e);
  };

}
