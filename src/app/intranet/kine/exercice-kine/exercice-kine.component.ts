import { Component, OnInit } from '@angular/core';
import { ExerciceI } from 'src/app/partage/modeles/Types';
import { MatDialog } from '@angular/material/dialog';
import { ModalExKineComponent } from './modal-ex-kine/modal-ex-kine.component';
import { InfosService } from 'src/app/partage/services/infos.service';
import { KineService } from '../services/kine.service';

@Component({
  selector: 'app-exercice-kine',
  templateUrl: './exercice-kine.component.html',
  styleUrls: ['./exercice-kine.component.scss'],
})
export class ExerciceKineComponent implements OnInit {
  fChoix:Array<string> = [];
  fFait:boolean = false;
  fAllergies:boolean = false;

  selectedImageTitle: string = '';
  selectedExerciceKine?: ExerciceI;

  constructor(private dialog: MatDialog, public l:InfosService, public kine:KineService) {}

  ngOnInit(): void {

    // Récupérer la liste des exercices
    if(this.kine.listeExos.length == 0) this.kine.getExercices();
  }
  /** Réinitialiser les filtres */
  initFiltres(){
    this.fChoix = [];
    this.fAllergies = false;
    this.fFait = false;
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
}
