import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredientsComponent } from './ingredients/ingredients.component';
// import { JournalRepasComponent } from './journal-repas/journal-repas.component';
import { MenusComponent } from './menus/menus.component';
import { NutritionComponent } from './nutrition.component';
import { PlatsComponent } from './plats/plats.component';
import { RecettesComponent } from './recettes/recettes.component';
import { ProgrammesComponent } from './programmes/programmes.component';

const routes: Routes = [
  { path: '', component: NutritionComponent },
  // { path: 'journal', component: JournalRepasComponent },
  { path: 'programmes', component: ProgrammesComponent },
  { path: 'ingredients', component: IngredientsComponent },
  { path: 'menus', component: MenusComponent },
  { path: 'plats', component: PlatsComponent },
  { path: 'recettes', component: RecettesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NutritionRoutingModule { }
