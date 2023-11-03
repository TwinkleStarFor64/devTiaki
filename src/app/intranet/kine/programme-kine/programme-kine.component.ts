import { Component, OnInit } from '@angular/core';
import { ExerciceI, ProgrammeI } from '../../partage/modeles/Types';
import { KineService } from '../services/kine.service';
import { InfosService } from 'src/app/partage/services/infos.service';

@Component({
  selector: 'app-programme-kine',
  templateUrl: './programme-kine.component.html',
  styleUrls: ['./programme-kine.component.scss'],
})
export class ProgrammeKineComponent implements OnInit {
  filtre: string = '';
  programme: ProgrammeI = { id: -1, titre: '', description: '', duree: '', materiels:[], exercices: [] };
  exercice!:ExerciceI;

  fFait: boolean = false;
  fAllergies: boolean = false;

  constructor( public kine: KineService, public l:InfosService) {}

  ngOnInit(): void {
    this.kine.getProgrammes().subscribe(p => {
      this.kine.listeProgrammes = p;
      this.programme = this.kine.listeProgrammes[0];
    });
  }
  /** Sélectionner un programme en particulier */
  setProgramme(p: ProgrammeI) {
    this.programme = p;
  }
  /** Réinitialiser les filtres */
  initFiltres() {
    this.programme = { id: -1, titre: '', description: '', duree: '', materiels:[], exercices: [] };
    this.fAllergies = false;
    this.fFait = false;
  }
  // methode permettent de récupérer les programmes et les titre des programmes
  onCarouselItemClick(exercice: ExerciceI) {
    this.exercice = exercice;
  }
}
