import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { DomSanitizer } from '@angular/platform-browser';
import { ProgrammeKineService } from 'src/app/intranet/kine/programme-kine/services/programme-kine.service';
import { ProgrammeI } from 'src/app/intranet/partage/modeles/Types';
import { ModalService } from 'src/app/intranet/partage/services/modal.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  avatar!: string;
  selectedMedia: { type: string, url: string } | null = null;
  mediaList: { type: string, url: string }[] = [];
  control = new FormControl('');
  myProg = new FormControl<any | ProgrammeI>('');
  filtre: string = '';
  selectedProgrammeKine?: ProgrammeI;
  programmesFiltres: ProgrammeI[] = [];
  hoveredProgramme?: ProgrammeI;

  constructor(public sanitizer: DomSanitizer, public modalService: ModalService, public programmeKine: ProgrammeKineService) { }

  showMedia(i: number) {
    this.selectedMedia = this.mediaList[i];
    this.modalService.setShowModal(true);
  }

  ngOnInit(): void {
    this.avatar = 'assets/imgAsidebar/cheerleader1.svg';
    this.programmeKine.getProgrammeKine().subscribe((programmes) => {
      this.programmeKine.programme = programmes;
      this.control = new FormControl('');
    });

  }
  //  méthode permettant de filtrer les programmes lorsqu'on utilise l'input
  filtrerProgrammes(): void {
    const controlValue = this.control.value;
    const filtre =
      typeof controlValue === 'string' ? controlValue.trim().toLowerCase() : '';

    if (filtre) {
      this.programmesFiltres = this.programmeKine.programme.filter(
        (programme: ProgrammeI) =>
          programme.titre.toLowerCase().includes(filtre)
      );
    } else {
      this.programmesFiltres = [];
    }
  }

  // Méthode permettant lors du click de l'input de voir tout les programmes
  allProgrammes() {
    this.programmesFiltres = [...this.programmeKine.programme];
  }

  // méthode permettant la récupération des données json via l'interface ProgrammeOptoI
  onSelectProgramme(programme: ProgrammeI): void {
    this.selectedProgrammeKine = programme;
    this.myProg.setValue(programme);
    // console.log('souris : ', programme);
  }

  // Méthode pour la sélection d'un élément avec le clavier
  onOptionSelected(event: MatAutocompleteSelectedEvent) {
    const programme = event.option.value;
    this.selectedProgrammeKine = programme;
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
      this.selectedProgrammeKine = programme;
      this.control.setValue(programme.titre);
    }
  }

  // méthode que je veux mettre sur la touche entrée
  onEnterProgramme(programme: ProgrammeI): void {
    this.selectedProgrammeKine = programme;
    console.log('clavier : ', programme);
  }

  //methode permettant de voir le titre dans l'input en survolant les titres des programme du menu déroulant
  hoverSelectedProgramme(programme: any) {
    this.control.setValue(programme ? programme.titre : '');
  }
}
