import { Component, OnInit } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { isSameDay, isSameMonth, parse, parseISO } from 'date-fns';
import { Subject } from 'rxjs';
import { EventService } from './services/event.service';


@Component({
  selector: 'app-journal-repas',
  templateUrl: './journal-repas.component.html',
  styleUrls: ['./journal-repas.component.scss'],
})
export class JournalRepasComponent implements OnInit {

  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Week;
  CalendarView = CalendarView;

  
  events: CalendarEvent[] = [];

  activeDayIsOpen = false;

  refresh = new Subject<void>();

  selectedButton: number = -1; //Pour le CSS des boutons

  colors: any = {
    bon: {
      primary: '#33BB27',
      secondary: '#33BB27'
    },
    moyen: {
      primary: '#F0C02E',
      secondary: '#F0C02E',            
    },
    mauvais: {
      primary: '#D9042B',
      secondary: '#D9042B',
    },
    neutre: {
      primary: '#D1D1D1',
      secondary: '#D1D1D1'
    }
  }

  constructor(public eventService: EventService) {
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
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) || events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }

  eventClicked(event:any) {
    console.log(event);    
  }

  eventTimesChanged(event:any) {
    event.event.start = event.newStart;
    event.event.end = event.newEnd;
    this.refresh.next();
  }
  
  async fetchEvents() {
    const { data, error } = await this.eventService.getEvents();
    if (data) {
      this.events = data.map((item: { [x: string]: any }) => ({
        id: item['id'],
        title: item['title'],
        start: parseISO(item['start']),
        color: this.colors[item['color']] || this.colors.neutre,
        cssClass: 'calendarTitle',
      }));     
      console.log(this.events.map((item) => item['title']));
    }
    if (error) {
      console.log(error);      
    }
  }

}
