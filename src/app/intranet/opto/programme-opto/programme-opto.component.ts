import { Component, OnInit } from '@angular/core';
import { ExerciceI, ProgrammeI } from '../../partage/modeles/Types';
import { OptoService } from '../services/opto.service';
import { InfosService } from 'src/app/partage/services/infos.service';

@Component({
  selector: 'app-programme-opto',
  templateUrl: './programme-opto.component.html',
  styleUrls: ['./programme-opto.component.scss'],
})
export class ProgrammeOptoComponent implements OnInit {
  filtre: string = '';
  programme: ProgrammeI = { id: -1, titre: '', description: '', duree: '', materiels:[], exercices: [] };
  exercice: ExerciceI = { id: -1, titre: '', description: '', duree: '' };
  programmesFiltres: ProgrammeI[] = [];
  hoveredProgramme?: ProgrammeI;
  selectedImageTitle: string = '';

  fFait: boolean = false;
  fAllergies: boolean = false;

  constructor(public opto: OptoService, public l: InfosService) { }

  // Récupère les données du service programmeOptoService et les enregistre grâce au subscribe
  // Récupère les données du service programmeOptoService et les enregistre grâce au subscribe
  ngOnInit(): void {
    if (this.opto.listeProgrammes.length == 0) {
      this.opto.getProgrammes().subscribe({
        next: p => {
          this.opto.listeProgrammes = p;
          this.programme = p[0];
        },
        error: er => console.log(er),
        complete: () => console.log("Programmes chargés")
      })
    } else { this.programme = this.opto.listeProgrammes[0]; }
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

  onCarouselItemClick(exo: ExerciceI) {
    this.exercice = exo;
  }
}
