import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ExerciceKineComponent } from './pages/exercice-kine/exercice-kine.component';




const routes: Routes = [
  {path:'', component: AccueilComponent},
  // {path:'nutrition', component: NutritionComponent},
  {path:'exerciceKine', component: ExerciceKineComponent},
  // {path:'optometrie', component: OptometrieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
