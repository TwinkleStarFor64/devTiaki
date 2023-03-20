import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MesPlatsI } from 'src/app/intranet/utils/modeles/Types';

@Injectable({
  providedIn: 'root'
})
export class PlatsService {

  plat: MesPlatsI[] = [];

  constructor(private http: HttpClient) { }

  getMesPlats() {
    this.http.get<MesPlatsI[]>('assets/data/plats.json').subscribe(
      {
        next: response => this.plat = response,
        error: er => console.log(er),
        complete: () => console.log(this.plat)
      }
      
    );
    return this.plat;
  };

}
