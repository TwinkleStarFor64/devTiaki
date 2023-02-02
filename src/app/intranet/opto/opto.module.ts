import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptoRoutingModule } from './opto-routing.module';
import { ExerciceOptoComponent } from './exercice-opto/exercice-opto.component';
import { ProgrammeOptoComponent } from './programme-opto/programme-opto.component';
import { ProgressionOptoComponent } from './progression-opto/progression-opto.component';
import { BottomBarOptoComponent } from './bottom-bar-opto/bottom-bar-opto.component';


@NgModule({
  declarations: [
    ExerciceOptoComponent,
    ProgrammeOptoComponent,
    ProgressionOptoComponent,
    BottomBarOptoComponent
  ],
  imports: [
    CommonModule,
    OptoRoutingModule,
  ]
})
export class OptoModule { }
