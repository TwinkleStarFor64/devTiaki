import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { Component, OnInit } from '@angular/core';
import { ExerciceI } from 'src/app/intranet/modeles/Types.js';
import { FormControl } from '@angular/forms';
import { SanityService } from 'src/app/partage/services/sanity.service';
import { MatDialog } from '@angular/material/dialog';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { ModalExOptoComponent } from './modal-ex-opto/modal-ex-opto.component';
import { BottomBarOptoComponent } from "../bottom-bar-opto/bottom-bar-opto.component";

@Component({
  selector: 'app-exercice-otpo',
  templateUrl: './exercice-opto.component.html',
  styleUrls: ['./exercice-opto.component.scss'],
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule, MatButtonModule, MatIconModule, MatInputModule, MatSelectModule, MatAutocompleteModule, BottomBarOptoComponent],

})
export class ExerciceOptoComponent implements OnInit {
  avatar!: string;
  exercicesOpto!: ExerciceI[];
  control = new FormControl('');
  exercicesFiltres: ExerciceI[] = [];
  selectedImageTitle: string = '';
  selectedExerciceOpto?: ExerciceI;
  filtrerExercice: string = '';
  exerciceDureeSurvole: ExerciceI | null = null;
  exerciceMaterielSurvole: ExerciceI | null = null;

  constructor(public sanity: SanityService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.avatar = 'assets/imgAsidebar/cheerleader1.svg';
    this.sanity.getExercicesOpto().then((data) => {
      this.exercicesOpto = data;
      this.exercicesFiltres = [...this.exercicesOpto]; // Afficher tous les exercices
    });
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
      this.exercicesFiltres = this.exercicesOpto.filter((exercice: ExerciceI) =>
        exercice.title.toLowerCase().includes(filtre)
      );
    } else {
      this.exercicesFiltres = [...this.exercicesOpto];
    }
  }
  // methode de selection d'un élément
  onOptionSelected(event: MatAutocompleteSelectedEvent) {
    const exercice = event.option.value;
    this.selectedExerciceOpto = exercice;
    this.control.setValue(exercice.title);
    this.exercicesFiltres = [exercice];
  }
  //methode permettant de voir le titre dans l'input en survolant les titres des exercices du menu déroulant
  hoverSelectedExercice(exercice: any) {
    this.control.setValue(exercice ? exercice.title : '');
  }
}
