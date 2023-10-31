import { Component, OnInit } from '@angular/core';
import { ExerciceI } from 'src/app/intranet/partage/modeles/Types.js';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { ModalExOptoComponent } from './modal-ex-opto/modal-ex-opto.component';
import { OptoService } from '../services/opto.service';
import { InfosService } from 'src/app/partage/services/infos.service';

@Component({
  selector: 'app-exercice-otpo',
  templateUrl: './exercice-opto.component.html',
  styleUrls: ['./exercice-opto.component.scss'],
})
export class ExerciceOptoComponent implements OnInit {

  fChoix:Array<string> = [];
  fFait:boolean = false;
  fAllergies:boolean = false;

  selectedImageTitle: string = '';
  selectedExerciceKine?: ExerciceI;

  constructor(private dialog: MatDialog, public opto: OptoService, public l:InfosService) { }

  ngOnInit(): void {
    // Récupérer la liste des exercices
    if (this.opto.listeExos.length == 0) this.opto.getExercices();
  }
  /** Réinitialiser les filtres */
  initFiltres(){
    this.fChoix = [];
    this.fAllergies = false;
    this.fFait = false;
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
}
