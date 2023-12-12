import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CiqualI, MenuI } from 'src/app/intranet/partage/modeles/Types';
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

  menus: Array<MenuI> = [];
  ciqual: CiqualI[] = [];

  constructor(private http: HttpClient) {this.supabase = createClient(environment.supabaseUrl,environment.supabaseKey);}

  getMesMenus() {
    this.http.get<Array<MenuI>>('assets/data/menus.json').subscribe({
      next: (response) => (this.menus = response),
      error: (er) => console.log(er),
      complete: () => console.log(this.menus),
    });
    return this.menus;
  }

  //Je récupére les données de la BDD supaBase
  async getRepas() {
    const repas = await this.supabase
      .from('repas') //La table repas
      .select('*'); //Je select toutes les données avec *
    console.log( repas);
    return repas;
  }
}
