import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BottomI } from '../../partage/modeles/Types';

@Injectable({
  providedIn: 'root',
})
export class KineService {
  bottomKine: BottomI[] = [];

  constructor(private http: HttpClient) {}

  getBottomKine() {
    this.http.get<BottomI[]>('assets/data/bottomKine.json').subscribe({
      next: (r) => (this.bottomKine = r),
      error: (er) => console.log(er),
      complete: () => console.log(this.bottomKine),
    });
    return this.bottomKine;
  }
}
