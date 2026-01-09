import { Routes } from '@angular/router';

export const optoRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./opto.component').then(c => c.OptoComponent)
  },
  {
    path: 'progression-Opto',
    loadComponent: () => import('./progression-opto/progression-opto.component').then(c => c.ProgressionOptoComponent)
  },
  {
    path: 'exercice-Opto',
    loadComponent: () => import('./exercice-opto/exercice-opto.component').then(c => c.ExerciceOptoComponent)
  },
  {
    path: 'programme-Opto',
    loadComponent: () => import('./programme-opto/programme-opto.component').then(c => c.ProgrammeOptoComponent)
  }
];