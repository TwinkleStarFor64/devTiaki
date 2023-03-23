import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MesMenusI } from 'src/app/intranet/utils/modeles/Types';

@Injectable({
  providedIn: 'root'
})
export class MenusService {

  menu: MesMenusI[] = [];

  constructor(private http:HttpClient) { }

  getMesMenus() {
    this.http.get<MesMenusI[]>('assets/data/menus.json').subscribe(
      {
        next: response => this.menu = response,
        error: er => console.log(er),
        complete: () => console.log(this.menu)
      }
      
    );
    return this.menu;
  };
}
