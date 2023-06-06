import { Component, OnInit } from '@angular/core';
import { ExerciceI } from 'src/app/intranet/modeles/Types.js';
import { SanityService } from 'src/app/services/sanity.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalExKineComponent } from './modal-ex-kine/modal-ex-kine.component';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-exercice-kine',
  templateUrl: './exercice-kine.component.html',
  styleUrls: ['./exercice-kine.component.scss'],
})
export class ExerciceKineComponent implements OnInit {
  avatar!: string;
  exercicesKine!: ExerciceI[];
  control = new FormControl('');
  exercicesFiltres: ExerciceI[] = [];
  selectedImageTitle: string = '';
  selectedExerciceKine?: ExerciceI;
  filtrerExercice: string = '';
  exerciceDureeSurvole: ExerciceI | null = null;
  exerciceMaterielSurvole: ExerciceI | null = null;


  constructor(public sanity: SanityService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.avatar = 'assets/imgAsidebar/cheerleader1.svg';
    // Récupérer la méthode de sanity service pour avoir les photos et descriptions
    this.sanity.getExercices().then((data) => {
      this.exercicesKine = data;
      this.exercicesFiltres = [...this.exercicesKine]; // Afficher tous les exercices
    });
    this.control = new FormControl('');
  }

  // Ouverture de la modal exercice au click
  openDialog(exercice: ExerciceI) {
    return this.dialog.open(ModalExKineComponent, {
      disableClose: true,
      autoFocus: true,
      height: '850px',
      width: '1500px',
      data: exercice,
    });
  }

  // Filtrer les exercices dans la barre de recherche
  filtrerExercices(): void {
    const controlValue = this.control.value;
    const filtre =
      typeof controlValue === 'string' ? controlValue.trim().toLowerCase() : '';

    if (filtre) {
      this.exercicesFiltres = this.exercicesKine.filter((exercice: ExerciceI) =>
        exercice.title.toLowerCase().includes(filtre)
      );
    } else {
      this.exercicesFiltres = [...this.exercicesKine];
    }
  }

  // Méthode pour la sélection d'un élément avec le clavier
  onOptionSelected(event: MatAutocompleteSelectedEvent) {
    const exercice = event.option.value;
    this.selectedExerciceKine = exercice;
    this.control.setValue(exercice.title);
    this.exercicesFiltres = [exercice];
  }

  //methode permettant de voir le titre dans l'input en survolant les titres des exercices du menu déroulant
  hoverSelectedExercice(exercice: any) {
    this.control.setValue(exercice ? exercice.title : '');
  }
}
