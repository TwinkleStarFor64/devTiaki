import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutilsRoutingModule } from './outils-routing.module';
import { JournalComponent } from './journal/journal.component';
import { HistoriqueComponent } from './historique/historique.component';
import { MessagerieComponent } from './messagerie/messagerie.component';
import { ProfilComponent } from './profil/profil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ParametreComponent } from './parametre/parametre.component';
import { DeleteComponent } from './dialog/delete/delete.component';
import { JournalPipe } from '../utils/pipes/journal.pipe';
import { EditJournalComponent } from './edit-journal/edit-journal.component';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatOptionModule } from '@angular/material/core';



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
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    FormsModule,
    NgxMatSelectSearchModule,
    MatOptionModule,
    HttpClientModule
    
  ],
  entryComponents: [DeleteComponent],
})
export class OutilsModule {}
