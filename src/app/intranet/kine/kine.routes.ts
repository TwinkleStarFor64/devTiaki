import { Routes } from '@angular/router';

export const kineRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./kine.component').then(c => c.KineComponent)
  },
  {
    path: 'progression-Kine',
    loadComponent: () => import('./progression-kine/progression-kine.component').then(c => c.ProgressionKineComponent)
  },
  {
    path: 'programme-Kine',
    loadComponent: () => import('./programme-kine/programme-kine.component').then(c => c.ProgrammeKineComponent)
  },
  {
    path: 'exercice-Kine',
    loadComponent: () => import('./exercice-kine/exercice-kine.component').then(c => c.ExerciceKineComponent)
  }
];