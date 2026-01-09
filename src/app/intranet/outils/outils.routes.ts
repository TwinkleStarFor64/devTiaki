import { Routes } from '@angular/router';

export const outilsRoutes: Routes = [
  // Temporarily disabled due to syntax errors
  // {
  //   path: 'journal',
  //   loadComponent: () => import('./journal/journal.component').then(c => c.JournalComponent)
  // },
  {
    path: 'historique',
    loadComponent: () => import('./historique/historique.component').then(c => c.HistoriqueComponent)
  },
  {
    path: 'messagerie',
    loadComponent: () => import('./messagerie/messagerie.component').then(c => c.MessagerieComponent)
  },
  {
    path: 'profil',
    loadComponent: () => import('./profil/profil.component').then(c => c.ProfilComponent)
  },
  {
    path: 'parametre',
    loadComponent: () => import('./parametre/parametre.component').then(c => c.ParametreComponent)
  },
  // Temporarily disabled due to syntax errors
  // {
  //   path: 'modifier/:id',
  //   loadComponent: () => import('./edit-journal/edit-journal.component').then(c => c.EditJournalComponent)
  // }
];