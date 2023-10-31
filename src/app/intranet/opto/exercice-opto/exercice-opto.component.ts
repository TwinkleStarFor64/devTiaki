import { Component, OnInit } from '@angular/core';
import { ExerciceI } from 'src/app/intranet/partage/modeles/Types.js';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { ModalExOptoComponent } from './modal-ex-opto/modal-ex-opto.component';
import { OptoService } from '../services/opto.service';

@Component({
  selector: 'app-exercice-otpo',
  templateUrl: './exercice-opto.component.html',
  styleUrls: ['./exercice-opto.component.scss'],
})
export class ExerciceOptoComponent implements OnInit {

  listeExosFiltres: ExerciceI[] = [];
  control = new FormControl('');
  selectedImageTitle: string = '';
  selectedExerciceOpto?: ExerciceI;
  filtrerExercice: string = '';
  exerciceDureeSurvole: ExerciceI | null = null;
  exerciceMaterielSurvole: ExerciceI | null = null;
  exoSelect!: ExerciceI;

  constructor(private dialog: MatDialog, public opto: OptoService) { }

  ngOnInit(): void {
    // Récupérer la liste des exercices
    if (this.opto.listeExos.length == 0) this.opto.getExercices();
  }

  // Ouverture de la modal exercice au click
  openDialog(exercice: ExerciceI) {
    return this.dialog.open(ModalExOptoComponent, {
      disableClose: true,
      autoFocus: true,
      panelClass: 'modalExercices',
      data: exercice,
    });
  }
  // filtrer les exercices
  filtrerExercices(): void {
    const controlValue = this.control.value;
    const filtre =
      typeof controlValue === 'string' ? controlValue.trim().toLowerCase() : '';

    if (filtre) {
      this.listeExosFiltres = this.opto.listeExos.filter((exercice: ExerciceI) =>
        exercice.titre.toLowerCase().includes(filtre)
      );
    } else {
      this.listeExosFiltres = [...this.opto.listeExos];
    }
  }
  // methode de selection d'un élément
  onOptionSelected(event: MatAutocompleteSelectedEvent) {
    const exercice = event.option.value;
    this.selectedExerciceOpto = exercice;
    this.control.setValue(exercice.title);
    this.listeExosFiltres = [exercice];
  }
  //methode permettant de voir le titre dans l'input en survolant les titres des exercices du menu déroulant
  hoverSelectedExercice(exercice: any) {
    this.control.setValue(exercice ? exercice.title : '');
  }
}
