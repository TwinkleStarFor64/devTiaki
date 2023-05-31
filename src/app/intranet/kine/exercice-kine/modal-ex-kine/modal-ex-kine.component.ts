import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ExerciceI } from 'src/app/intranet/modeles/Types';
import { SanityService } from 'src/app/services/sanity.service';


@Component({
  selector: 'app-modal-ex-kine',
  templateUrl: './modal-ex-kine.component.html',
  styleUrls: ['./modal-ex-kine.component.scss']
})
export class ModalExKineComponent implements OnInit  {

  exercicesKine: ExerciceI[] =[];
  exerciceModal!: ExerciceI;

  constructor(@Inject(MAT_DIALOG_DATA) public data:any, public dialogRef: MatDialogRef<ModalExKineComponent>,public sanity: SanityService){ }

  ngOnInit(): void {
    this.sanity.getExercices().then((data) => this.exercicesKine = data)
    
    this.sanity.getExercices().then((data) => console.log(this.exercicesKine = data));
    
  }
  // Fermer la modal de description exercice
  closeDialog() {
    this.dialogRef.close(false);
  }
  openModal(exercice: ExerciceI) {
    this.exerciceModal = exercice;
  }


 
}
