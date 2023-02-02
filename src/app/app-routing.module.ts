import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './intranet/accueil/accueil.component';
import { ConnexionComponent } from './extranet/connexion/connexion.component';
import { InfosComponent } from './extranet/infos/infos.component';
import { MentionsLegalesComponent } from './extranet/mentions-legales/mentions-legales.component';
import { RgpdComponent } from './extranet/rgpd/rgpd.component';
import { ExerciceKineComponent } from './intranet/kine/exercice-kine/exercice-kine.component';
import { ProgrammeKineComponent } from './intranet/kine/programme-kine/programme-kine.component';
import { ProgressionKineComponent } from './intranet/kine/progression-kine/progression-kine.component';
import { ExerciceOptoComponent } from './intranet/opto/exercice-opto/exercice-opto.component';
import { ProgrammeOptoComponent } from './intranet/opto/programme-opto/programme-opto.component';
import { ProgressionOptoComponent } from './intranet/opto/progression-opto/progression-opto.component';




// Toutes le routes permettant de naviguer sur l'application.
const routes: Routes = [
  {path:'', component:ConnexionComponent},
  // {path:'Accueil', component: AccueilComponent},
  // {path:'exerciceKine', component: ExerciceKineComponent},
  // {path:'progressionKine', component: ProgressionKineComponent},
  // {path:'programmeKine', component: ProgrammeKineComponent },
  // {path:'exerciceOpto', component: ExerciceOptoComponent},
  // {path:'progressionOpto', component: ProgressionOptoComponent},
  // {path:'programmeOpto', component: ProgrammeOptoComponent },
  // {path:'rgpd', component:RgpdComponent},
  // {path:'mentions-legales', component:MentionsLegalesComponent},
  // {path:'infos', component:InfosComponent},
  {path:'intranet', loadChildren: () =>  import('./intranet/intranet.module').then( m => m.IntranetModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
