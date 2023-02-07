import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutilsRoutingModule } from './outils-routing.module';
import { JournalComponent } from './journal/journal.component';
import { HistoriqueComponent } from './historique/historique.component';
import { MessagerieComponent } from './messagerie/messagerie.component';
import { ProfilComponent } from './profil/profil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessagesModule } from 'primeng/messages';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';




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
    InputTextModule,
    InputTextareaModule,
    ReactiveFormsModule,
    DropdownModule,
    MessagesModule,
    ConfirmDialogModule,
    HttpClientModule
  ]
})
export class OutilsModule { }
