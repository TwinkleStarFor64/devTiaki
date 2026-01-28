import { Routes } from '@angular/router';
import { NutritionComponent } from './nutrition.component';
import { JournalRepasComponent } from './journal-repas/journal-repas.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { MenusComponent } from './menus/menus.component';
import { PlatsComponent } from './plats/plats.component';
import { RecettesComponent } from './recettes/recettes.component';
import { AccueilNutri } from './accueil-nutri/accueil-nutri';

export const nutritionRoutes: Routes = [
  { path: '', component: NutritionComponent },
  {
    path: '', component: AccueilNutri, children: [
      { path: 'journal', component: JournalRepasComponent },
      { path: 'ingredients', component: IngredientsComponent },
      { path: 'menus', component: MenusComponent },
      { path: 'plats', component: PlatsComponent },
      { path: 'recettes', component: RecettesComponent }
    ]
  },

];