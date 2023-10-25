import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciceOptoComponent } from './exercice-opto/exercice-opto.component';
import { OptoComponent } from './opto.component';
import { ProgrammeOptoComponent } from './programme-opto/programme-opto.component';
import { ProgressionOptoComponent } from './progression-opto/progression-opto.component';

const routes: Routes = [
  { path: '', component: OptoComponent },
  { path: 'progressions', component: ProgressionOptoComponent },
  { path: 'exercices', component: ExerciceOptoComponent },
  { path: 'programmes', component: ProgrammeOptoComponent },
];
// /intranet/opto/progressions

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OptoRoutingModule { }
