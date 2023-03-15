import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutilsRoutingModule } from './outils-routing.module';
import { JournalComponent } from './journal/journal.component';
import { HistoriqueComponent } from './historique/historique.component';
import { MessagerieComponent } from './messagerie/messagerie.component';
import { ProfilComponent } from './profil/profil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
    JournalComponent,
    HistoriqueComponent,
    MessagerieComponent,
    ProfilComponent,
  ],
  imports: [
    CommonModule,
    OutilsRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class OutilsModule { }
