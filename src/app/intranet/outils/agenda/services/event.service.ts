import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CalendarEvent } from 'angular-calendar';
import { AuthSession, createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';
import { EventI } from 'src/app/intranet/partage/modeles/Types';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private supabase: SupabaseClient;
  _session: AuthSession | null = null;

  events: Array<CalendarEvent> = []; // Liste des événements ?
  evaluation: any[] = [];

  constructor(private http: HttpClient) { this.supabase = createClient(environment.supabaseUrl,environment.supabaseKey) }

  async getEvents() {
    const event = await this.supabase
    .from('events')
    .select('*');
    //console.log("eventService", event);
    return event;
  }
  /** Créer un événement */
  async createEvent(event:EventI) {
    const { error: createError } = await this.supabase
      .from('agenda')
      .insert(event)
      .select()
      .single();

    if(createError) {
      console.log(createError);
    }
  }
  /** Supprimer un évenement
   * @param {number} id id de l'événement à supprimer
   */
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
  // Mock des valuations
  getEvaluation() {
    this.http.get<any[]>('assets/data/evaluation.json').subscribe({
      next: (response) => (this.evaluation = response),
      error: (er) => console.log(er),
      complete: () => console.log("getEvaluation - eventService",this.evaluation),
    });
    return this.evaluation;
  }


}


