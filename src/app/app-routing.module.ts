import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ExerciceKineComponent } from './kine/exercice-kine/exercice-kine.component';
import { ProgrammeKineComponent } from './kine/programme-kine/programme-kine.component';
import { ProgressionKineComponent } from './kine/progression-kine/progression-kine.component';




const routes: Routes = [
  {path:'', component: AccueilComponent},
  // {path:'nutrition', component: NutritionComponent},
  {path:'exerciceKine', component: ExerciceKineComponent},
  {path:'progressionKine', component: ProgressionKineComponent},
  {path:'programmeKine', component: ProgrammeKineComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
