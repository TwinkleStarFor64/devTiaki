import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KineRoutingModule } from './kine-routing.module';
import { ProgressionKineComponent } from './progression-kine/progression-kine.component';
import { ExerciceKineComponent } from './exercice-kine/exercice-kine.component';
import { ProgrammeKineComponent } from './programme-kine/programme-kine.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { KineComponent } from './kine.component';
import { FooterModule } from '../footer/footer.module';
import { BottomBarKineComponent } from './bottom-bar-kine/bottom-bar-kine.component';




@NgModule({
  declarations: [
    ProgressionKineComponent,
    ExerciceKineComponent,
    ProgrammeKineComponent,
    CarouselComponent,
    KineComponent,
    BottomBarKineComponent,
  ],
  imports: [
    CommonModule,
    KineRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatSelectModule,
    FooterModule
  ]
})
export class KineModule { }
