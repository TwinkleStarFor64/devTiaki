import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CiqualI, MesPlatsI } from 'src/app/intranet/utils/modeles/Types';

@Injectable({
  providedIn: 'root',
})
export class PlatsService {
  plat: MesPlatsI[] = [];
  ciqual: CiqualI[] = [];

  constructor(private http: HttpClient) {}

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
}
