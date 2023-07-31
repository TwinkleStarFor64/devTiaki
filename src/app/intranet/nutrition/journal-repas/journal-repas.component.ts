import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarEvent, CalendarEventAction, CalendarView, DateAdapter } from 'angular-calendar';
import { format, isSameDay, isSameMonth, parse, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Subject } from 'rxjs';
import { EventService } from './services/event.service';
import { MenusService } from '../menus/services/menus.service';
import { MesMenusI, MesPlatsI } from '../../utils/modeles/Types';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PlatsService } from '../plats/services/plats.service';
import { ThemePalette } from '@angular/material/core';
import {Router} from "@angular/router";
import { DeleteDataComponent } from '../dialog/delete-data/delete-data.component';
import { MatDialog } from '@angular/material/dialog';
import { CheckJournalComponent } from '../dialog/check-journal/check-journal.component';


@Component({
  selector: 'app-journal-repas',
  templateUrl: './journal-repas.component.html',
  styleUrls: ['./journal-repas.component.scss'],
  providers: [
    
  ]
})
export class JournalRepasComponent implements OnInit {
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


  public formatDateToFrench(date: Date): string {
    return format(date, 'dd/MM/yyyy', { locale: fr });
  }  


//--------------------------------------------- Ci-dessous code pour les réglages du calendrier ------------------------------------

  viewDate: Date = new Date(); // Je définie la vue par défaut sur la date d'aujourd'hui
  view: CalendarView = CalendarView.Month; // Je définie la vue par défaut du calendrier (Mois, Semaine, Journée)
  CalendarView = CalendarView;

  events: CalendarEvent[] = []; // events de type CalendarEvent[]
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

  actions: CalendarEventAction [] = [
    {
      label: '<img src="assets/trashBlue.svg"/>',
          onClick: ({ event }: { event: CalendarEvent }): void => {
            /* this.events = this.events.filter((iEvent) => iEvent !== event);
            console.log('Event deleted', event); */
            this.deleteEventConfirm(event.id) // Appel de la méthode pour delete qui contient la Modal et la méthode supabase           
            .then(() => { // Aprés validation de la méthode au dessus je gére l'affichage HTML du calendrier
              // Code angular calendar pour supprimer sur l'affichage HTML
              this.events = this.events.filter((iEvent) => iEvent.id !== event.id);
            })
          },
    }
  ]

//----------------------------------------- Ci-dessous code pour l'interface d'ajout de données dans l'agenda -------------------------------------
  repas: MesMenusI[] = [];
  plats: MesPlatsI[] = [];
  selectedRepas?: MesMenusI; // Pour la méthode onSelect()

  formData!: FormGroup;

  constructor(public eventService: EventService, public menuService: MenusService, public platService: PlatsService, private formBuilder: FormBuilder, private dialog: MatDialog) {
    /* const event1 = {
      title: "Saut en parachute",
      start: new Date ("2023-07-17T14:00"),
      end: new Date ("2023-07-17T17:00"),
      color: this.colors.yellow,
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      }
    }

    this.events.push(event1); */
  }

  async ngOnInit(): Promise<void> {
    this.fetchEvents();
    this.fetchMenus();
    this.fetchPlats();
    this.eventService.getEvaluation();    

    this.formData = this.formBuilder.group ({
      choice: [null, [Validators.required]], // Pour les mat-radio-button et la gestion du ngIf - Par défaut j'affiche aucun select - pour choisir le select menu remplacer null par 'menu'
      title: [null, [Validators.required]],
      color: [null, [Validators.required]], 
      start: [Date, [Validators.required]],
      observations: [null]    
    });    
    
  }  


//--------------------------------------------------- Ci-dessous les méthodes pour le calendrier -----------------------------------------------------
  setView(view: CalendarView) {
    this.view = view;
    // Pour changer l'affichage ( vue du mois, de la semaine ou du jour)
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
//Cette condition vérifie si le jour cliqué (date) appartient au même mois que la date actuellement affichée (viewDate).Si c'est le cas, cela signifie que l'utilisateur a cliqué sur un jour déjà ouvert. 
//Cela permet de s'assurer que l'ouverture ou la fermeture des événements est effectuée uniquement lorsque l'utilisateur clique sur un jour du mois affiché à l'écran.
    if (isSameMonth(date, this.viewDate)) {
      if (
//isSameDay(this.viewDate, date): Cela vérifie si le jour cliqué est le même que le jour actuellement ouvert (viewDate).
//this.activeDayIsOpen === true: Cela vérifie si activeDayIsOpen est déjà défini sur true.
//events.length === 0: Cela vérifie si la longueur du tableau events est égale à zéro, ce qui signifie qu'il n'y a pas d'événements pour ce jour spécifique.
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) || events.length === 0
      ) {
//Si la condition précédente est vraie, cela signifie que l'utilisateur a cliqué sur un jour déjà ouvert, ou qu'il n'y a pas d'événements pour ce jour. 
//Dans les deux cas, la variable activeDayIsOpen est définie sur false, ce qui ferme les événements pour le jour actuellement sélectionné.
        this.activeDayIsOpen = false;
      } else { //Dans le cas contraire le clique déclenche l'ouverture de l'événement
        this.activeDayIsOpen = true;
        this.viewDate = date;
//this.viewDate = date - La variable viewDate est mise à jour avec la date du jour cliqué (date). Cela permet de mettre à jour la vue du calendrier pour afficher les événements du jour sélectionné.
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
  eventTimesChanged(event:any) {
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

// Méthode faisant appel à la Modal de confirmation puis à la méthode de suppression dans supabase
  async deleteEventConfirm(id: any) {
    this.deleteDialog() // J'appelle la Modal deleteDialog()
    .afterClosed()
    .subscribe((res) => { // Je souscris si résolution
      if (res) {
        this.eventService.deleteEvent(id) // J'appelle la méthode dans event.service
        .then(() => {
          this.fetchEvents(); // Puis (.then) je refais un fetch des évenements
        })                
      }      
    })
    throw new Error;
  }  

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
      console.log("fetchEvents de journal-repas",this.events.map((item) => item['title']));
    }
    if (error) {
      console.log(error);      
    }
  }

// -------------------------------------- Ci-dessous les méthodes pour l'interface d'ajout de données dans l'agenda --------------------------

  async fetchMenus() {
    const { data, error } = await this.menuService.getRepas();
    if (data) {
      //Ici, nous utilisons la méthode map pour créer un nouveau tableau repas à partir de data.
      //Chaque élément de data est représenté par l'objet { [x: string]: any; }, que nous convertissons en un objet MesMenusI en utilisant les propriétés nécessaires.
      this.repas = data.map((item: { [x: string]: any }) => ({
        id: item['id'],
        nom: item['nom'],
        description: item['description'],
        alim_code: item['alim_code'],
        statut: item['statut'],
      }));
      //console.log(this.repas.map((item) => item['id']));
    }
    if (error) {
      //Si une erreur
      console.log(error);
    }
  }

  async fetchPlats() {
    const { data, error } = await this.platService.getPlats();
    if (data) {
      this.plats = data.map((item: { [x:string]: any }) => ({
        id: item['id'],
        nom: item['nom'],
        description: item['description'],
        alim_code: item['alim_code'], 
        statut: item['statut']
      }));
    }
    if (error) {
      console.log(error);      
    }
  }

  async onSubmitForm() {
    console.log(this.formData.value);
    const newEntry = {
      choice: this.formData.value.choice,
      title: this.formData.value.title,
      color: this.formData.value.color,
      start: this.formData.value.start,
      observations: this.formData.value.observations
    };
    await this.eventService.createEvent(newEntry).then(() => {
      this.fetchEvents();
      this.formData.reset();      
      //window.location.reload();
    })    
  }
}





// Méthode pour supprimer un événement - Remplacer par la méthode supabase contenu dans event.service
/* deleteEvent(event: CalendarEvent): void {
  const eventIndex = this.events.indexOf(event);
  if (eventIndex > -1) {      
        this.events.splice(eventIndex, 1);
        this.refresh.next();
      }    
  } */


  /* eventClicked(event:any) {
    console.log(event);
    this.openDialog();      
  } */