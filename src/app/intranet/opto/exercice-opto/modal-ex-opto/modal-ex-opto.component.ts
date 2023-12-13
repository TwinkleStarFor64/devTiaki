import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ExerciceI } from 'src/app/intranet/partage/modeles/Types';

@Component({
  selector: 'app-modal-ex-opto',
  templateUrl: './modal-ex-opto.component.html',
  styleUrls: ['./modal-ex-opto.component.scss'],
})
export class ModalExOptoComponent {
  exercicesOpto!: ExerciceI[];
  exerciceModal!: ExerciceI;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ModalExOptoComponent>,
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
