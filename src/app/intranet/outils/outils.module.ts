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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';



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
    BrowserModule,
    BrowserAnimationsModule,
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
