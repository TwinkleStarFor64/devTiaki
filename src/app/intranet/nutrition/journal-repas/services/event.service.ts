import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CalendarEvent } from 'angular-calendar';
import {
  AuthChangeEvent,
  AuthSession,
  createClient,
  Session,
  SupabaseClient,
  User,
} from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private supabase: SupabaseClient;
  _session: AuthSession | null = null;

  events: CalendarEvent[] = [];
  evaluation: any[] = [];

  constructor(private http: HttpClient) { this.supabase = createClient(environment.supabaseUrl,environment.supabaseKey) }

  async getEvents() {
    const event = await this.supabase
    .from('events')
    .select('*');
    //console.log("eventService", event);
    return event;    
  }

  async createEvent(
    newEntry: {
      start: Date;
      title: string;
      color: string;
      observations: string;
      choice: string;
    }) {
    //newEntry.start = new Date();
    const { error: createError } = await this.supabase
      .from('events')
      .insert(newEntry)
      .select()
      .single();

    if(createError) {
      console.log(createError);      
    }
  }

  async deleteEvent(id: any)  {
    const { error: deleteError } = await this.supabase
      .from('events')
      .delete()
      .eq('id', id)

    if (deleteError) {
      console.log(deleteError);  
      return;      
    }    
  }  

  getEvaluation() {
    this.http.get<any[]>('assets/data/evaluation.json').subscribe({
      next: (response) => (this.evaluation = response),
      error: (er) => console.log(er),
      complete: () => console.log("getEvaluation - eventService",this.evaluation),
    });
    return this.evaluation;
  }


}


 