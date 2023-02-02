import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgressionKineComponent } from './progression-kine/progression-kine.component';

const routes: Routes = [
  {path:'', component:ProgressionKineComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KineRoutingModule { }
