import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciceOptoComponent } from './exercice-opto/exercice-opto.component';
import { OptoComponent } from './opto.component';
import { ProgrammeOptoComponent } from './programme-opto/programme-opto.component';
import { ProgressionOptoComponent } from './progression-opto/progression-opto.component';

const routes: Routes = [
  { path: '', component: OptoComponent },
  { path: 'progression-Opto', component: ProgressionOptoComponent },
  { path: 'exercice-Opto', component: ExerciceOptoComponent },
  { path: 'programme-Opto', component: ProgrammeOptoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OptoRoutingModule {}
