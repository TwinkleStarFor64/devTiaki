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

  constructor(private http: HttpClient) { this.supabase = createClient(environment.supabaseUrl,environment.supabaseKey) }

  async getEvents() {
    const event = await this.supabase
    .from('events')
    .select('*');
    console.log("eventService", event);
    return event;    
  }



}


