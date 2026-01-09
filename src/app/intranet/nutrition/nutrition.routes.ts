import { Routes } from '@angular/router';

export const nutritionRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./nutrition.component').then(c => c.NutritionComponent)
  },
  {
    path: 'journal-Repas',
    loadComponent: () => import('./journal-repas/journal-repas.component').then(c => c.JournalRepasComponent)
  },
  {
    path: 'ingredients',
    loadComponent: () => import('./ingredients/ingredients.component').then(c => c.IngredientsComponent)
  },
  {
    path: 'menus',
    loadComponent: () => import('./menus/menus.component').then(c => c.MenusComponent)
  },
  {
    path: 'plats',
    loadComponent: () => import('./plats/plats.component').then(c => c.PlatsComponent)
  },
  {
    path: 'recettes',
    loadComponent: () => import('./recettes/recettes.component').then(c => c.RecettesComponent)
  }
];