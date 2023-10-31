import { Injectable } from '@angular/core';
import { ExerciceI, ProgrammeI } from '../../partage/modeles/Types';
import { HttpClient } from '@angular/common/http';
import { DonneesService } from '../../partage/services/donnees.service';

@Injectable({
  providedIn: 'root',
})
export class OptoService {

  listeProgrammes:Array<ProgrammeI> = [];
  listeExos:Array<ExerciceI> = [];

  constructor(private http: HttpClient, public get:DonneesService) {}

  getProgrammes(){
    this.get.getJsonData('opto-programmes').subscribe(p => this.listeProgrammes = p);
  }
  getExercices()  {
    console.log("Chargement des exercices");
    this.get.getJsonData('opto-exos').subscribe(e => this.listeExos = e);
  };
}
