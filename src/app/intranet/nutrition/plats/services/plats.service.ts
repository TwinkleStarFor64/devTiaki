import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CiqualI, MesPlatsI } from 'src/app/intranet/utils/modeles/Types';
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
  providedIn: 'root',
})
export class PlatsService {
  private supabase: SupabaseClient;
  _session: AuthSession | null = null;

  plat: MesPlatsI[] = [];
  ciqual: CiqualI[] = [];

  constructor(private http: HttpClient) {this.supabase = createClient(environment.supabaseUrl,environment.supabaseKey)}

  getMesPlats() {
    this.http.get<MesPlatsI[]>('assets/data/plats.json').subscribe({
      next: (response) => (this.plat = response),
      error: (er) => console.log(er),
      complete: () => console.log(this.plat),
    });
    return this.plat;
  }

  getCiqual() {
    this.http.get<CiqualI[]>('assets/data/ciqual.json').subscribe({
      next: (r) => (this.ciqual = r),
      error: (er) => console.log(er),
      complete: () => console.log(this.ciqual),
    });
    return this.ciqual;
  }

  //Je récupére les données de la BDD supaBase
  async getPlats() {
    const plats = await this.supabase
      .from('plats') //La table plats
      .select('*'); //Je select toutes les données avec *
    console.log( plats);
    return plats;
  }  

 




}
