import { Component, ViewChild } from '@angular/core';
import { CalendarEvent, CalendarEventAction, CalendarView, DateAdapter } from 'angular-calendar';
import { format, isSameDay, isSameMonth, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Subject, firstValueFrom } from 'rxjs';
import { EventService } from './services/event.service';
import { EventI, MenuI, PlatI } from 'src/app/partage/modeles/Types';
import { FormGroup } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { CheckJournalComponent } from '../../nutrition/dialog/check-journal/check-journal.component';
import { DeleteDataComponent } from '../../nutrition/dialog/delete-data/delete-data.component';
import { InfosService } from 'src/app/partage/services/infos.service';
import { NutritionService } from '../../nutrition/services/nutrition.service';


@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent {
  @ViewChild('picker') picker: any; // Ajouter pour Date Time Picker - Voir la doc https://www.npmjs.com/package/@angular-material-components/datetime-picker

  public dateTime: Date = new Date();
  //public dateTime = parse('2023-07-20', 'yyyy-MM-dd', new Date());
  public disabled = false;
  public showSpinners = true;
  public showSeconds = false;
  public touchUi = false;
  public enableMeridian = false;
  public minDate!: Date;
  public maxDate!: Date;
  public stepHour = 1;
  public stepMinute = 1;
  public stepSecond = 1;
  public color: ThemePalette = 'primary';

  event!:EventI; // Evénement à ajouter

  public formatDateToFrench(date: Date): any {
    return format(date, 'dd/MM/yyyy', { locale: fr });
  }


  //--------------------------------------------- Ci-dessous code pour les réglages du calendrier ------------------------------------
  viewDate: Date = new Date(); // Je définie la vue par défaut sur la date d'aujourd'hui
  view: CalendarView = CalendarView.Month; // Je définie la vue par défaut du calendrier (Mois, Semaine, Journée)
  CalendarView = CalendarView;

  events: Array<CalendarEvent> = []; // events de type CalendarEvent[]
  selectedId: any; // Pour stocker l'id dans la méthode eventClicked()
  selectedTitle: any; // Pour stocker le title (Le nom du plat dans la BDD events) dans la méthode eventClicked()

  activeDayIsOpen = false; // Pour la méthode dayClicked()

  refresh = new Subject<void>(); // Pour la méthode eventTimesChanged()

  selectedButton: number = -1; //Pour le CSS des boutons

  colors: any = {
    Positif: {
      primary: '#33BB27',
      secondary: '#33BB27'
    },
    Observations: {
      primary: '#F0C02E',
      secondary: '#F0C02E',
    },
    Allergies: {
      primary: '#D9042B',
      secondary: '#D9042B',
    },
    Neutre: {
      primary: '#D1D1D1',
      secondary: '#D1D1D1'
    }
  };
  //----------------------------------------- Ci-dessous code pour l'interface d'ajout de données dans l'agenda -------------------------------------
  repas: Array<MenuI>= [];
  plats: Array<PlatI> = [];
  selectedRepas?: MenuI; // Pour la méthode onSelect()

  formData!: FormGroup;

  constructor(public l: InfosService, public eventService: EventService, public nutri: NutritionService, private dialog: MatDialog) { }

  async ngOnInit(): Promise<void> {
    this.eventService.getEvaluation();
  }
  /** Initialiser l'événement à ajouter */
  initEvent(){
    this.event = {date:0, titre:''}
  }
  //--------------------------------------------------- Ci-dessous les méthodes pour le calendrier -----------------------------------------------------
  setView(view: CalendarView) {
    this.view = view;
    // Pour changer l'affichage ( vue du mois, de la semaine ou du jour)
  }
  /** Evénement déclenché sur le clic d'un jour */
  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if ((isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) || events.length === 0) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }

  openDialog() {
    const dataToSend = { // J'attribue à data l'id et le nom de l'event ou je clique
      selectedId: this.selectedId,
      selectedTitle: this.selectedTitle
    }
    return this.dialog.open(CheckJournalComponent, {
      disableClose: true,
      autoFocus: true,
      height: '800px',
      width: '1000px',
      data: dataToSend, // data de la modal - renvoie un ID utiliser pour la modal check-journal
    });

  }

  // Méthode pour cliquer sur un évenement du calendrier
  // {event} est une variable à laquelle j'attribue un event de type CalendarEvent - Doc : https://mattlewis92.github.io/angular-calendar/#/clickable-events
  eventClicked({ event }: { event: CalendarEvent }): void {
    console.log("Méthode eventCliked - j'ai cliqué sur l'id : ", event.id);
    this.selectedId = event.id; // J'attribue l'id de l'event sur lequel j'ai cliqué
    console.log("Variable selectedId contient l'id : ", this.selectedId);

    console.log("Méthode eventClicked - j'ai cliqué sur le nom : ", event.title);
    this.selectedTitle = event.title;
    console.log("Variable selectedTitle contient le nom : ", this.selectedTitle);

    this.openDialog(); // J'ouvre la modal
  }

  // Si je veux pouvoir modifier et déplacer les éléments affichés dans le calendrier - non utilisé pour le moment
  eventTimesChanged(event: any) {
    event.event.start = event.newStart;
    event.event.end = event.newEnd;
    this.refresh.next();
  }

  // Modal Material Angular pour confirmer la suppression d'un menu
  deleteDialog() {
    return this.dialog.open(DeleteDataComponent, {
      disableClose: true,
      autoFocus: true,
      height: '200px',
      width: '400px',
      data: 'Êtes vous sur de vouloir supprimer ?',
    });
  }
  /** Actions déclenchées sur un clic dans l'agenda */
  actions: CalendarEventAction[] = [
    {
      label: '<img src="assets/trashBlue.svg"/>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.deleteEventConfirm(event.id) // Appel de la méthode pour delete qui contient la Modal et la méthode supabase
          // Aprés validation de la méthode au dessus je gére l'affichage HTML du calendrier - Code ci-dessous pour supprimer sur l'affichage HTML
          .then((isConfirmed: boolean) => { // isConfirmed est soit vrai soit faux
            if (isConfirmed) { // Si isConfirmed est vrai je filtre les événements avec .filter() dans le tableau this.events
              this.events = this.events.filter((iEvent) => iEvent.id !== event.id);
              // Ci-dessus filter() itère sur chaque élément de this.events et vérifie si la propriété id de l'événement (iEvent.id) est différente de l'ID de l'événement que je veux supprimer (event.id)
            }
          });
      },
    }
  ]
  // Méthode faisant appel à la Modal de confirmation puis à la méthode de suppression dans supabase
  // Je renvoie une promesse "Promise<boolean>" pour indiquer si la suppression a été confirmée
  async deleteEventConfirm(id: any): Promise<boolean> {
    try {
      // J'utilise firstValueFrom pour attendre le premier élément émis par l'observable retourné par this.deleteDialog().afterClosed()
      // afterClosed() retourne un Observable qui émet la valeur lorsque la boîte de dialogue est fermée
      const result = await firstValueFrom(this.deleteDialog().afterClosed());
      if (result) {
        await this.eventService.deleteEvent(id);
        return true; // Suppression confirmée et effectuée avec succès.
      } else {
        return false; // Suppression annulée ou la boîte de dialogue a été fermée sans confirmer.
      }
    } catch (error) {
      console.error('Erreur lors de la gestion de la suppression de l\'événement :', error);
      return false; // En cas d'erreur, renvoie false.
    }
  }

  // Méthode pour récupérer les événements enregistrés sur le calendrier
  async fetchEvents() {
    const { data, error } = await this.eventService.getEvents();
    if (data) {
      this.events = data.map((item: { [x: string]: any }) => ({
        id: item['id'],
        title: item['title'],
        start: parseISO(item['start']), // J'utilise parseISO pour convertir en un objet Date valide
        color: this.colors[item['color']] || this.colors.Neutre,
        choice: item['choice'],
        observations: item['observations'],
        cssClass: 'calendarTitle', // Si je veux attribuer une classe CSS
        actions: this.actions // Utile ??
      }));
      console.log("fetchEvents de journal-repas", this.events.map((item) => item['title']));
    }
    if (error) {
      console.log(error);
    }
  }
  async onSubmitForm() {
    await this.eventService.createEvent(this.event).then(() => {
      this.fetchEvents();
      this.formData.reset();
    })
  }
}
