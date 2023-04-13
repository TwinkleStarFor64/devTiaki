import { Injectable } from '@angular/core'
import {
  AuthChangeEvent,
  AuthSession,
  createClient,
  Session,
  SupabaseClient,
  User,
} from '@supabase/supabase-js'
import { environment } from 'src/environments/environment'
import { HistoriqueJournalI } from '../intranet/modeles/Types'

export interface AidantI {
  id: number
  nom: string
}

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient
  _session: AuthSession | null = null

  historiqueJournal: HistoriqueJournalI [] = [];

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey)
  }

  async getAidant() {
    return await this.supabase
      .from('aidant')
      .select('id, nom')
  } 
  
  async getHistoriqueJournal() {
    const historiqueJournal = await this.supabase
    .from('journalEvenement')
    .select('id, date, objet, description, commentaire') 
    return historiqueJournal;
  }
}
