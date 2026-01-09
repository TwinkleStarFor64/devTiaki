import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ExerciceI } from 'src/app/intranet/modeles/Types';
import { SanityService } from 'src/app/partage/services/sanity.service';

@Component({
  selector: 'app-modal-ex-opto',
  templateUrl: './modal-ex-opto.component.html',
  styleUrls: ['./modal-ex-opto.component.scss'],
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatInputModule, MatSelectModule, MatAutocompleteModule, CdkAccordionModule, MatDialogModule, MatProgressBarModule],

})
export class ModalExOptoComponent {
  exercicesOpto!: ExerciceI[];
  exerciceModal!: ExerciceI;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ModalExOptoComponent>,
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
