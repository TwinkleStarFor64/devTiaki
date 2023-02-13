import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './extranet/connexion/connexion.component';
import { InfosComponent } from './extranet/infos/infos.component';
import { MentionsLegalesComponent } from './extranet/mentions-legales/mentions-legales.component';
import { RgpdComponent } from './extranet/rgpd/rgpd.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

// Toutes les routes permettant de naviguer sur l'application.
const routes: Routes = [
  {path:'', component:ConnexionComponent},

  {path:'rgpd', component:RgpdComponent},
  {path:'mentions-legales', component:MentionsLegalesComponent},
  {path:'infos', component:InfosComponent},
  {path:'intranet', loadChildren: () =>  import('./intranet/intranet.module').then( m => m.IntranetModule)},
  { path: 'pageNotFound', component: PagenotfoundComponent},
  { path: '**', redirectTo: '/pageNotFound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
