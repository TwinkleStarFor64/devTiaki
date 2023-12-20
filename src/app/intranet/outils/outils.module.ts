import { Injectable, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { JournalComponent } from './journal/journal.component';
import { MessagerieComponent } from './messagerie/messagerie.component';
import { ProfilComponent } from './profil/profil.component';
import { ParametreComponent } from './parametre/parametre.component';
import { DeleteComponent } from './dialog/delete/delete.component';
import { JournalPipe } from '../partage/pipes/journal.pipe';
import { EditJournalComponent } from './edit-journal/edit-journal.component';
import { SharedModule } from '../../partage/shared.module';
import { OutilsRoutingModule } from './outils-routing.module';
import { AgendaComponent } from './agenda/agenda.component';
import localeFr from '@angular/common/locales/fr';
import { CalendarDateFormatter, CalendarModule, CalendarNativeDateFormatter, DateAdapter, DateFormatterParams } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

registerLocaleData(localeFr, 'fr'); // Pour Angular Calendar - Utilisation du format Français

@Injectable() // Pour l'erreur de dépréciation
// Pour Angular Calendar - Modification du format date et heure en Français
class CustomDateFormatter extends CalendarNativeDateFormatter {

  public override dayViewHour({ date, locale }: DateFormatterParams): string {
    return new Intl.DateTimeFormat(locale, {hour: 'numeric', minute: 'numeric'}).format(date);
  }

  public override weekViewHour({ date, locale }: DateFormatterParams): string {
    return new Intl.DateTimeFormat(locale, {hour: 'numeric', minute: 'numeric'}).format(date);
  }
}

@NgModule({
  declarations: [
    JournalComponent,
    MessagerieComponent,
    ProfilComponent,
    ParametreComponent,
    DeleteComponent,
    EditJournalComponent,
    JournalPipe,
    AgendaComponent
  ],
  imports: [
    CommonModule,
    OutilsRoutingModule,
    SharedModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })
  ],
  providers: [
    {provide: CalendarDateFormatter, useClass: CustomDateFormatter} // Angular Calendar - J'intégre la classe définie au dessus
  ]
})
export class OutilsModule {}
