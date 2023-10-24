import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { ProgrammeI } from '../../partage/modeles/Types';
import { ProgrammeOptoService } from '../services/programme-opto.service';

@Component({
  selector: 'app-programme-opto',
  templateUrl: './programme-opto.component.html',
  styleUrls: ['./programme-opto.component.scss'],
})
export class ProgrammeOptoComponent implements OnInit {
  control = new FormControl('');
  myProg = new FormControl<any | ProgrammeI>('');
  filtre: string = '';
  selectedProgrammeOpto?: ProgrammeI;
  programmesFiltres: ProgrammeI[] = [];
  hoveredProgramme?: ProgrammeI;
  selectedImageTitle: string = '';

  constructor(public programmeOpto: ProgrammeOptoService) {}

  // Récupère les données du service programmeOptoService et les enregistre grâce au subscribe
  ngOnInit(): void {
    this.programmeOpto.getProgrammeOpto().subscribe((programmes) => {
      this.programmeOpto.programme = programmes;
      this.control = new FormControl('');
    });
  }

  //  méthode permettant de filtrer les programmes lorsqu'on utilise l'input
  filtrerProgrammes(): void {
    const controlValue = this.control.value;
    const filtre =
      typeof controlValue === 'string' ? controlValue.trim().toLowerCase() : '';

    if (filtre) {
      this.programmesFiltres = this.programmeOpto.programme.filter(
        (programme: ProgrammeI) =>
          programme.titre.toLowerCase().includes(filtre)
      );
    } else {
      this.programmesFiltres = [];
    }
  }
  // Méthode permettant lors du click de l'input de voir tout les programmes
  allProgrammes() {
    this.programmesFiltres = [...this.programmeOpto.programme];
  }

  // méthode permettant la récupération des données json via l'interface ProgrammeOptoI
  onSelectProgramme(programme: ProgrammeI): void {
    this.selectedProgrammeOpto = programme;
    this.myProg.setValue(programme);
    console.log('souris : ', programme);
  }

  // Méthode pour la sélection d'un élément avec le clavier
  onOptionSelected(event: MatAutocompleteSelectedEvent) {
    const programme = event.option.value;
    this.selectedProgrammeOpto = programme;
    this.control.setValue(programme.titre);
    // this.control.markAsDirty();
  }

  // méthode permettant de sélectionner le premier programme et de mettre à jour la valeur de l'input
  selectionnerPremierProgramme() {
    if (this.programmesFiltres.length > 0) {
      const premierProgramme = this.programmesFiltres[0];
      this.onSelectProgramme(premierProgramme);
      this.control.setValue(premierProgramme.titre);
    }
  }

  // méthode permettant de définir le programme sélectionné et de mettre à jour la valeur de l'input
  setSelectedProgramme(programme: any) {
    if (programme) {
      this.selectedProgrammeOpto = programme;
      this.control.setValue(programme.titre);
    }
  }

  // méthode que je veux mettre sur la touche entrée
  onEnterProgramme(programme: ProgrammeI): void {
    this.selectedProgrammeOpto = programme;
    console.log('clavier : ', programme);
  }

  //methode permettant de voir le titre dans l'input en survolant les titres des programme du menu déroulant
  hoverSelectedProgramme(programme: any) {
    this.control.setValue(programme ? programme.titre : '');
  }
  onCarouselItemClick(programme: ProgrammeI) {
    this.selectedProgrammeOpto = programme;
    this.selectedImageTitle = programme.titre;
  }
}
