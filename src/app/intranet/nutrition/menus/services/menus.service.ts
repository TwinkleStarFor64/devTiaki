import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CiqualI, MesMenusI } from 'src/app/intranet/utils/modeles/Types';
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
export class MenusService {
  private supabase: SupabaseClient;
  _session: AuthSession | null = null;

  menu: MesMenusI[] = [];
  ciqual: CiqualI[] = [];

  constructor(private http: HttpClient) {this.supabase = createClient(environment.supabaseUrl,environment.supabaseKey);}

  getMesMenus() {
    this.http.get<MesMenusI[]>('assets/data/menus.json').subscribe({
      next: (response) => (this.menu = response),
      error: (er) => console.log(er),
      complete: () => console.log(this.menu),
    });
    return this.menu;
  }

  //Je récupére les données de la BDD supaBase
  async getRepas() {
    const repas = await this.supabase
      .from('repas') //La table repas
      .select('*'); //Je select toutes les données avec *
    console.log( repas);
    return repas;
  }  

  async getCiqual() {
    const ciqual = await this.supabase
      .from('ciqual')
      .select('*');
    console.log(ciqual);    
    return ciqual;
  }

  async getCiqualBis() {
    const ciqual = await this.supabase
      .from('ciqualAnses')
      .select('*');    
    return ciqual;    
  }

}
