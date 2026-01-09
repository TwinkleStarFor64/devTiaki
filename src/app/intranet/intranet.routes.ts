import { Routes } from '@angular/router';

export const intranetRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./intranet.component').then(c => c.IntranetComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./accueil/accueil.component').then(c => c.AccueilComponent)
      },
      {
        path: 'tableau',
        loadComponent: () => import('./tableau/tableau.component').then(c => c.TableauComponent)
      },
      {
        path: 'kine',
        loadChildren: () => import('./kine/kine.routes').then(r => r.kineRoutes)
      },
      {
        path: 'opto',
        loadChildren: () => import('./opto/opto.routes').then(r => r.optoRoutes)
      },
      {
        path: 'nutrition',
        loadChildren: () => import('./nutrition/nutrition.routes').then(r => r.nutritionRoutes)
      },
      {
        path: 'outils',
        loadChildren: () => import('./outils/outils.routes').then(r => r.outilsRoutes)
      }
    ]
  }
];