import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptoRoutingModule } from './opto-routing.module';
import { ExerciceOptoComponent } from './exercice-opto/exercice-opto.component';
import { ProgrammeOptoComponent } from './programme-opto/programme-opto.component';
import { ProgressionOptoComponent } from './progression-opto/progression-opto.component';
import { BottomBarOptoComponent } from './bottom-bar-opto/bottom-bar-opto.component';
import { ProgrammeOptoPipe } from '../utils/pipes/programme-opto.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { CarouselOptoComponent } from './carousel-opto/carousel-opto.component';
import { OptoComponent } from './opto.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalExOptoComponent } from './exercice-opto/modal-ex-opto/modal-ex-opto.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    ExerciceOptoComponent,
    ProgrammeOptoComponent,
    ProgressionOptoComponent,
    BottomBarOptoComponent,
    ProgrammeOptoPipe,
    CarouselOptoComponent,
    OptoComponent,
    ModalExOptoComponent,
  ],
  imports: [
    CommonModule,
    OptoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatIconModule,
    MatDialogModule
  ],
})
export class OptoModule {}
