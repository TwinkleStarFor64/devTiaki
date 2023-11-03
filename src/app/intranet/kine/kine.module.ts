import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KineRoutingModule } from './kine-routing.module';
import { ProgressionKineComponent } from './progression-kine/progression-kine.component';
import { ExerciceKineComponent } from './exercice-kine/exercice-kine.component';
import { ProgrammeKineComponent } from './programme-kine/programme-kine.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { KineComponent } from './kine.component';
import { ModalExKineComponent } from './exercice-kine/modal-ex-kine/modal-ex-kine.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { FilterPipe } from '../partage/pipes/filter.pipe';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SharedModule } from '../partage/shared.module';

@NgModule({
  declarations: [
    ProgressionKineComponent,
    ExerciceKineComponent,
    ProgrammeKineComponent,
    CarouselComponent,
    KineComponent,
    ModalExKineComponent,
    FilterPipe
  ],

  imports: [
    CommonModule,
    KineRoutingModule,
    SharedModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatButtonModule,
    MatSelectModule,
    MatDialogModule,
    MatIconModule,
    MatDialogModule,
    MatProgressBarModule
  ],
})
export class KineModule {}
