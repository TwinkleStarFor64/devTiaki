import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ExerciceKineComponent } from './kine/exercice-kine/exercice-kine.component';
import { ProgrammeKineComponent } from './kine/programme-kine/programme-kine.component';
import { ProgressionKineComponent } from './kine/progression-kine/progression-kine.component';
import { IngredientsComponent } from './nutrition/ingredients/ingredients.component';
import { JournalRepasComponent } from './nutrition/journal-repas/journal-repas.component';
import { MenusComponent } from './nutrition/menus/menus.component';
import { PlatsComponent } from './nutrition/plats/plats.component';
import { RecettesComponent } from './nutrition/recettes/recettes.component';
import { ExerciceOptoComponent } from './opto/exercice-opto/exercice-opto.component';
import { ProgrammeOptoComponent } from './opto/programme-opto/programme-opto.component';
import { ProgressionOptoComponent } from './opto/progression-opto/progression-opto.component';
import { HistoriqueComponent } from './outils/historique/historique.component';
import { JournalComponent } from './outils/journal/journal.component';
import { MessagerieComponent } from './outils/messagerie/messagerie.component';
import { ProfilComponent } from './outils/profil/profil.component';




const routes: Routes = [
  {path:'', component: AccueilComponent},
  {path:'exerciceKine', component: ExerciceKineComponent},
  {path:'progressionKine', component: ProgressionKineComponent},
  {path:'programmeKine', component: ProgrammeKineComponent },
  {path:'exerciceOpto', component: ExerciceOptoComponent},
  {path:'progressionOpto', component: ProgressionOptoComponent},
  {path:'programmeOpto', component: ProgrammeOptoComponent },
  {path:'ingredients', component: IngredientsComponent },
  {path:'journalRepas', component: JournalRepasComponent},
  {path:' menus', component: MenusComponent},
  {path:'plats', component:PlatsComponent},
  {path:'recettes', component:RecettesComponent},
  {path:'messagerie', component:MessagerieComponent},
  {path:'journal', component:JournalComponent},
  {path:'historique', component:HistoriqueComponent},
  {path:'profil', component:ProfilComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
