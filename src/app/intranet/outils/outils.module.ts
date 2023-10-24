import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JournalComponent } from './journal/journal.component';
import { HistoriqueComponent } from './historique/historique.component';
import { MessagerieComponent } from './messagerie/messagerie.component';
import { ProfilComponent } from './profil/profil.component';
import { ParametreComponent } from './parametre/parametre.component';
import { DeleteComponent } from './dialog/delete/delete.component';
import { JournalPipe } from '../partage/pipes/journal.pipe';
import { EditJournalComponent } from './edit-journal/edit-journal.component';
import { SharedModule } from '../partage/shared.module';
import { OutilsRoutingModule } from './outils-routing.module';

@NgModule({
  declarations: [
    JournalComponent,
    HistoriqueComponent,
    MessagerieComponent,
    ProfilComponent,
    ParametreComponent,
    DeleteComponent,
    EditJournalComponent,
    JournalPipe
  ],
  imports: [
    CommonModule,
    OutilsRoutingModule,
    SharedModule
  ],
  entryComponents: [DeleteComponent],
})
export class OutilsModule {}
