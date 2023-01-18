import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ExerciceKineComponent } from './pages/exercice-kine/exercice-kine.component';
import { ProgrammeKineComponent } from './pages/programme-kine/programme-kine.component';




const routes: Routes = [
  {path:'', component: AccueilComponent},
  // {path:'nutrition', component: NutritionComponent},
  {path:'exerciceKine', component: ExerciceKineComponent},
  // {path:'progressionKine', component: OptometrieComponent},
  {path:'programmeKine', component: ProgrammeKineComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
