import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecetteI } from 'src/app/intranet/partage/modeles/Types';

@Injectable({
  providedIn: 'root',
})
export class RecettesService {
  recettes: RecetteI[] = [];
  constructor(private http: HttpClient) {}

  getRecettes() {
    this.http.get<RecetteI[]>('assets/data/dataRecettes.json').subscribe({
      next: (r) => (this.recettes = r),
      error: (er) => console.log(er),
      complete: () => console.log(this.recettes),
    });
    return this.recettes;
  }
}
