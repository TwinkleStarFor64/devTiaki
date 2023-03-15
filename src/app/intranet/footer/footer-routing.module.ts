import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciceKineComponent } from '../kine/exercice-kine/exercice-kine.component';
import { KineComponent } from '../kine/kine.component';
import { ProgrammeKineComponent } from '../kine/programme-kine/programme-kine.component';
import { ProgressionKineComponent } from '../kine/progression-kine/progression-kine.component';
import { IngredientsComponent } from '../nutrition/ingredients/ingredients.component';
import { JournalRepasComponent } from '../nutrition/journal-repas/journal-repas.component';
import { MenusComponent } from '../nutrition/menus/menus.component';
import { NutritionComponent } from '../nutrition/nutrition.component';
import { PlatsComponent } from '../nutrition/plats/plats.component';
import { ExerciceOptoComponent } from '../opto/exercice-opto/exercice-opto.component';
import { OptoComponent } from '../opto/opto.component';
import { ProgrammeOptoComponent } from '../opto/programme-opto/programme-opto.component';
import { ProgressionOptoComponent } from '../opto/progression-opto/progression-opto.component';

const routes: Routes = [
  {path:'kine', component:KineComponent, children:[
    {path:'programme-Kine', component: ProgrammeKineComponent},
    {path:'progression-Kine', component: ProgressionKineComponent},
    {path:'exercice-Kine', component: ExerciceKineComponent}
  ] },
  {path:'opto', component:OptoComponent, children:[
    {path:'programme-Opto', component: ProgrammeOptoComponent},
    {path:'progression-Opto', component: ProgressionOptoComponent},
    {path:'exercice-Opto', component: ExerciceOptoComponent}
  ] },
  {path:'nutrition', component:NutritionComponent, children:[
    {path:'journal-Repas', component: JournalRepasComponent},
    {path:'menus', component: MenusComponent},
    {path:'plats', component: PlatsComponent},
    {path:'ingredients', component: IngredientsComponent}
  ] },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FooterRoutingModule { }
