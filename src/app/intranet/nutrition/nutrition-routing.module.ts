import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { MenusComponent } from './menus/menus.component';
import { NutritionComponent } from './nutrition.component';
import { PlatsComponent } from './plats/plats.component';
import { ProgrammesComponent } from './programmes/programmes.component';

const routes: Routes = [
  { path: '', component: NutritionComponent },
  { path: 'programmes', component: ProgrammesComponent },
  { path: 'ingredients', component: IngredientsComponent },
  { path: 'menus', component: MenusComponent },
  { path: 'plats', component: PlatsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NutritionRoutingModule { }
