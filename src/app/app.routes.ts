import { Routes } from '@angular/router';
import { authGuard, aidantGuard } from './partage/securite/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./extranet/connexion/connexion.component').then(c => c.ConnexionComponent)
  },
  {
    path: 'rgpd',
    loadComponent: () => import('./extranet/rgpd/rgpd.component').then(c => c.RgpdComponent)
  },
  {
    path: 'mentions-legales',
    loadComponent: () => import('./extranet/mentions-legales/mentions-legales.component').then(c => c.MentionsLegalesComponent)
  },
  {
    path: 'infos',
    loadComponent: () => import('./extranet/infos/infos.component').then(c => c.InfosComponent)
  },
  {
    path: 'intranet',
    loadChildren: () => import('./intranet/intranet.routes').then(r => r.intranetRoutes),
    canActivate: [authGuard] // Protect intranet routes with authentication
  },
  {
    path: 'unauthorized',
    loadComponent: () => import('./extranet/pagenotfound/pagenotfound.component').then(c => c.PagenotfoundComponent)
  },
  {
    path: '**',
    loadComponent: () => import('./extranet/pagenotfound/pagenotfound.component').then(c => c.PagenotfoundComponent)
  }
];