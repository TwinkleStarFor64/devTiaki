import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JournalComponent } from './journal/journal.component';
import { MessagerieComponent } from './messagerie/messagerie.component';
import { ProfilComponent } from './profil/profil.component';
import { ParametreComponent } from './parametre/parametre.component';
import { EditJournalComponent } from './edit-journal/edit-journal.component';
import { AgendaComponent } from './agenda/agenda.component';


const routes: Routes = [
  {path:'journaux', component:JournalComponent},
  {path:'agenda', component:AgendaComponent},
  {path:'messagerie', component:MessagerieComponent},
  {path:'profil', component:ProfilComponent},
  {path:'parametres', component:ParametreComponent},
  {path:'modifier/:id', component:EditJournalComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OutilsRoutingModule {}
