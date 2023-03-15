import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciceKineComponent } from './exercice-kine/exercice-kine.component';
import { KineComponent } from './kine.component';
import { ProgrammeKineComponent } from './programme-kine/programme-kine.component';
import { ProgressionKineComponent } from './progression-kine/progression-kine.component';

const routes: Routes = [
  {path:'' , component: KineComponent},
  {path:'progression-Kine', component:ProgressionKineComponent},
  {path:'programme-Kine', component:ProgrammeKineComponent},
  {path:'exercice-Kine', component:ExerciceKineComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KineRoutingModule { }
