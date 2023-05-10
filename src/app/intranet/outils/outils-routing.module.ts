import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoriqueComponent } from './historique/historique.component';
import { JournalComponent } from './journal/journal.component';
import { MessagerieComponent } from './messagerie/messagerie.component';
import { ProfilComponent } from './profil/profil.component';
import { ParametreComponent } from './parametre/parametre.component';
import { EditJournalComponent } from './edit-journal/edit-journal.component';


const routes: Routes = [
  {path:'journal', component:JournalComponent},
  {path:'historique', component:HistoriqueComponent},
  {path:'messagerie', component:MessagerieComponent},
  {path:'profil', component:ProfilComponent},
  {path:'parametre', component:ParametreComponent},
  {path:'modifier/:id', component:EditJournalComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutilsRoutingModule { }
