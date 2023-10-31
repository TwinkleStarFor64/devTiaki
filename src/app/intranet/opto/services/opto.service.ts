import { Injectable } from '@angular/core';
import { ExerciceI, ProgrammeI } from '../../partage/modeles/Types';
import { DonneesService } from '../../partage/services/donnees.service';

@Injectable({
  providedIn: 'root',
})
export class OptoService {

  listeProgrammes:Array<ProgrammeI> = [];
  listeExos:Array<ExerciceI> = [];

  constructor(public get:DonneesService) {}

  getProgrammes(){
    this.get.getJsonData('opto-programmes').subscribe(p => this.listeProgrammes = p);
  }
  getExercices()  {
    this.get.getJsonData('opto-exos').subscribe(e => this.listeExos = e);
  };
}
