import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { ExerciceI, ProgrammeI } from '../../partage/modeles/Types';
import { OptoService } from '../services/opto.service';
import { InfosService } from 'src/app/partage/services/infos.service';

@Component({
  selector: 'app-programme-opto',
  templateUrl: './programme-opto.component.html',
  styleUrls: ['./programme-opto.component.scss'],
})
export class ProgrammeOptoComponent implements OnInit {
  control = new FormControl('');
  myProg = new FormControl<any | ProgrammeI>('');
  filtre: string = '';
  listeProgrammes:Array<ProgrammeI> = [];
  programme: ProgrammeI = {id:-1, titre:'', description:'', duree:'', materiel:'', exercices:[]};
  exercice:ExerciceI = {id:-1, titre:'', description:'', duree:''};
  programmesFiltres: ProgrammeI[] = [];
  hoveredProgramme?: ProgrammeI;
  selectedImageTitle: string = '';

  constructor(public opto: OptoService, public l:InfosService) {}

  // Récupère les données du service programmeOptoService et les enregistre grâce au subscribe
  // Récupère les données du service programmeOptoService et les enregistre grâce au subscribe
  ngOnInit(): void {
    if(this.listeProgrammes.length == 0) this.opto.getProgrammes().subscribe({
      next: p => {
        this.listeProgrammes = p;
        this.programme = this.listeProgrammes[0];
      },
      error: er => console.log(er),
      complete: () => console.log("Programmes chargés")
    });
  }
  /** Sélectionner un programme en particulier */
  setProgramme(p:ProgrammeI){
    this.programme = p;
  }

  //  méthode permettant de filtrer les programmes lorsqu'on utilise l'input
  filtrerProgrammes(): void {
    const controlValue = this.control.value;
    const filtre =
      typeof controlValue === 'string' ? controlValue.trim().toLowerCase() : '';

    if (filtre) {
      this.programmesFiltres = this.listeProgrammes.filter(
        (programme: ProgrammeI) =>
          programme.titre.toLowerCase().includes(filtre)
      );
    } else {
      this.programmesFiltres = [];
    }
  }
  // Méthode permettant lors du click de l'input de voir tout les programmes
  allProgrammes() {
    this.programmesFiltres = [...this.listeProgrammes];
  }

  // méthode permettant la récupération des données json via l'interface ProgrammeOptoI
  onSelectExercice(exo: ExerciceI): void {
    this.exercice = exo;
    this.myProg.setValue(exo);
    console.log('souris : ', exo);
  }

  // Méthode pour la sélection d'un élément avec le clavier
  onOptionSelected(event: MatAutocompleteSelectedEvent) {
    const programme = event.option.value;
    this.programme = programme;
    this.control.setValue(programme.titre);
    // this.control.markAsDirty();
  }
  // méthode que je veux mettre sur la touche entrée
  onEnterProgramme(programme: ProgrammeI): void {
    this.programme = programme;
    console.log('clavier : ', programme);
  }

  //methode permettant de voir le titre dans l'input en survolant les titres des programme du menu déroulant
  hoverSelectedProgramme(programme: any) {
    this.control.setValue(programme ? programme.titre : '');
  }
  onCarouselItemClick(exo: ExerciceI) {
    this.exercice = exo;
    this.selectedImageTitle = exo.titre;
  }
}
