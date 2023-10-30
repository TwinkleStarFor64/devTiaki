import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ExerciceI } from 'src/app/intranet/partage/modeles/Types';
import { SanityService } from 'src/app/partage/services/sanity.service';

@Component({
  selector: 'app-modal-ex-kine',
  templateUrl: './modal-ex-kine.component.html',
  styleUrls: ['./modal-ex-kine.component.scss'],
})
export class ModalExKineComponent implements OnInit {
  exercicesKine!: ExerciceI[];
  exerciceModal!: ExerciceI;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ModalExKineComponent>,
    public sanity: SanityService
  ) {}

  ngOnInit(): void {
    this.exerciceModal = this.data;
    console.log(this.exerciceModal.titre);
  }
  // Fermer la modal de description exercice
  closeDialog() {
    this.dialogRef.close(false);
  }
  openModal(exercice: ExerciceI) {
    this.exerciceModal = exercice;
  }
}
