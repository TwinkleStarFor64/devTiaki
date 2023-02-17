import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptoRoutingModule } from './opto-routing.module';
import { ExerciceOptoComponent } from './exercice-opto/exercice-opto.component';
import { ProgrammeOptoComponent } from './programme-opto/programme-opto.component';
import { ProgressionOptoComponent } from './progression-opto/progression-opto.component';
import { BottomBarOptoComponent } from './bottom-bar-opto/bottom-bar-opto.component';
import { ProgrammeOptoPipe } from '../utils/pipes/programme-opto.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';



@NgModule({
  declarations: [
    ExerciceOptoComponent,
    ProgrammeOptoComponent,
    ProgressionOptoComponent,
    BottomBarOptoComponent,
    ProgrammeOptoPipe
   
  
  ],
  imports: [
    CommonModule,
    OptoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule
    
    
  ]
})
export class OptoModule { }
