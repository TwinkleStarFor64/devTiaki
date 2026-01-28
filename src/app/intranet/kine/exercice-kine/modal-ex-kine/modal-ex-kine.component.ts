import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ExerciceI } from 'src/app/intranet/utils/modeles/Types';
import { SanityService } from 'src/app/partage/services/sanity.service';
import { IntranetModule } from 'src/app/intranet/intranet.module';

@Component({selector: 'app-modal-ex-kine',
  templateUrl: './modal-ex-kine.component.html',
  styleUrls: ['./modal-ex-kine.component.scss'],
  imports: [IntranetModule],
  standalone: true})
export class ModalExKineComponent implements OnInit {
  exercicesKine!: ExerciceI[];
  exerciceModal!: ExerciceI;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ModalExKineComponent>,
    public sanity: SanityService
  ) { }

  ngOnInit(): void {
    this.exerciceModal = this.data;
    console.log(this.exerciceModal.title);
  }
  // Fermer la modal de description exercice
  closeDialog() {
    this.dialogRef.close(false);
  }
  openModal(exercice: ExerciceI) {
    this.exerciceModal = exercice;
  }
}
