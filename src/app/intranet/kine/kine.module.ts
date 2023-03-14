import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KineRoutingModule } from './kine-routing.module';
import { ProgressionKineComponent } from './progression-kine/progression-kine.component';
import { BottomBarKineComponent } from 'src/app/intranet/kine/bottom-bar-kine/bottom-bar-kine.component';
import { ExerciceKineComponent } from './exercice-kine/exercice-kine.component';
import { ProgrammeKineComponent } from './programme-kine/programme-kine.component';

import { CarouselComponent } from './carousel/carousel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    ProgressionKineComponent,
    ExerciceKineComponent,
    ProgrammeKineComponent,
    BottomBarKineComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    KineRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatSelectModule
  ]
})
export class KineModule { }
