import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciceOptoComponent } from './exercice-opto/exercice-opto.component';
import { ProgrammeOptoComponent } from './programme-opto/programme-opto.component';
import { ProgressionOptoComponent } from './progression-opto/progression-opto.component';

const routes: Routes = [
  {path:'progressionOpto', component:ProgressionOptoComponent},
  {path:'exerciceOpto' , component:ExerciceOptoComponent},
  {path:'programmeOpto' , component:ProgrammeOptoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OptoRoutingModule { }
