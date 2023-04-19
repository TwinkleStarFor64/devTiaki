import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutilsRoutingModule } from './outils-routing.module';
import { JournalComponent } from './journal/journal.component';
import { HistoriqueComponent } from './historique/historique.component';
import { MessagerieComponent } from './messagerie/messagerie.component';
import { ProfilComponent } from './profil/profil.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { ParametreComponent } from './parametre/parametre.component';


@NgModule({
  declarations: [
    JournalComponent,
    HistoriqueComponent,
    MessagerieComponent,
    ProfilComponent,
    ParametreComponent,
  ],
  imports: [
    CommonModule,
    OutilsRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class OutilsModule { }
