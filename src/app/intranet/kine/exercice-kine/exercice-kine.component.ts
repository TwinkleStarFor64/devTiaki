import { Component, OnInit } from '@angular/core';
import { ExerciceI } from 'src/app/intranet/partage/modeles/Types.js';
import { SanityService } from 'src/app/partage/services/sanity.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalExKineComponent } from './modal-ex-kine/modal-ex-kine.component';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { InfosService } from 'src/app/partage/services/infos.service';
import { KineService } from '../services/kine.service';

@Component({
  selector: 'app-exercice-kine',
  templateUrl: './exercice-kine.component.html',
  styleUrls: ['./exercice-kine.component.scss'],
})
export class ExerciceKineComponent implements OnInit {
  avatar!: string;
  listeExos:Array<ExerciceI> = [];
  // exercicesKine!: ExerciceI[];
  control = new FormControl('');
  listeExosFiltres: ExerciceI[] = [];
  selectedImageTitle: string = '';
  selectedExerciceKine?: ExerciceI;
  filtrerExercice: string = '';
  exerciceDureeSurvole: ExerciceI | null = null;
  exerciceMaterielSurvole: ExerciceI | null = null;

  exoSelect!:ExerciceI; // Exercice sélectionné

  constructor(public sanity: SanityService, private dialog: MatDialog, public l:InfosService, public kine:KineService) {}

  ngOnInit(): void {
    this.avatar = 'assets/imgAsidebar/cheerleader1.svg';
    // Récupérer la méthode de sanity service pour avoir les photos et descriptions
    // this.sanity.getExercices().then((data) => {
    //   this.exercicesKine = data;
    //   this.listeExosFiltres = [...this.exercicesKine]; // Afficher tous les exercices
    // });
    this.control = new FormControl('');

    // Récupérer la liste des exercices
    if(this.listeExos.length == 0) this.kine.getExercicesKine().subscribe(
      {
        next:r => {
          this.listeExos = r;
          this.listeExosFiltres = [...r];
        },
        error:er => console.log(er),
        complete: () => console.log(this.listeExos)
      }
    );;
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
      this.listeExosFiltres = this.listeExos.filter((exercice: ExerciceI) =>
        exercice.titre.toLowerCase().includes(filtre)
      );
    } else {
      this.listeExosFiltres = [...this.listeExos];
    }
  }

  // Méthode pour la sélection d'un élément avec le clavier
  onOptionSelected(event: MatAutocompleteSelectedEvent) {
    const exercice = event.option.value;
    this.selectedExerciceKine = exercice;
    this.control.setValue(exercice.title);
    this.listeExosFiltres = [exercice];
  }

  //methode permettant de voir le titre dans l'input en survolant les titres des exercices du menu déroulant
  hoverSelectedExercice(exercice: any) {
    this.control.setValue(exercice ? exercice.title : '');
  }
}
