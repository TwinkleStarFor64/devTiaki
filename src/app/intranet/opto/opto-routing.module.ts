import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgressionOptoComponent } from './progression-opto/progression-opto.component';

const routes: Routes = [
  {path:'', component:ProgressionOptoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OptoRoutingModule { }
