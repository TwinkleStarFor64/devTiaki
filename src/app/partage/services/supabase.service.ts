import { Injectable } from '@angular/core';
import {
  AuthSession,
  createClient,
  PostgrestSingleResponse,
  SupabaseClient,
} from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient; // Instance du client Supabase
  _session: AuthSession | null = null; // Session d'authentification

  /**  */
  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }
  /** Authentifier un utilisateur depuis Supabase */
  getAuth(){
    this.supabase.auth.signInWithPassword({email:'coucou', password:'leChat'})
    .then(data => console.log(data))
    .catch();
  }
}


