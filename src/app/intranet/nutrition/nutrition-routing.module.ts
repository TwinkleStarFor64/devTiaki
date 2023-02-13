import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciceOptoComponent } from '../opto/exercice-opto/exercice-opto.component';
import { ProgrammeOptoComponent } from '../opto/programme-opto/programme-opto.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { JournalRepasComponent } from './journal-repas/journal-repas.component';
import { MenusComponent } from './menus/menus.component';
import { NutritionComponent } from './nutrition.component';
import { PlatsComponent } from './plats/plats.component';
import { RecettesComponent } from './recettes/recettes.component';

const routes: Routes = [
  { path:'', component:NutritionComponent},
    {path:'journalRepas', component:JournalRepasComponent},
    {path:'ingredients' , component:IngredientsComponent},
    {path:'menus', component: MenusComponent},
    {path:'plats' , component:PlatsComponent}
  ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NutritionRoutingModule { }
