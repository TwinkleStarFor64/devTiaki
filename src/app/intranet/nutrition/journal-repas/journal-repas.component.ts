import { Component, OnInit } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { isSameDay, isSameMonth } from 'date-fns';
import { Subject } from 'rxjs';


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
    yellow: {
      primary: '#F0C02E',
      secondary: '#F0C02E',      
    },
    red: {
      primary: '#D9042B',
      secondary: '#D9042B',
    }
  }

  constructor() {
    const event1 = {
      title: "Saut en parachute",
      start: new Date ("2023-07-17T14:00"),
      //end: new Date ("2023-07-17T17:00"),
      color: this.colors.yellow,
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      }
    }

    this.events.push(event1);
  }

  ngOnInit(): void {
    
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
  
}
