import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';


const routes: Routes = [
  {path:'', component: AccueilComponent},
  // {path:'nutrition', component: NutritionComponent},
  // {path:'kinesitherapie', component: KinesitherapieComponent},
  // {path:'optometrie', component: OptometrieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
