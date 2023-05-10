import { Injectable } from '@angular/core';
import { BottomI } from '../../modeles/Types';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OptoService {
  bottomOpto: BottomI[] = [];

  constructor(private http: HttpClient) {}

  getBottomOpto() {
    this.http.get<BottomI[]>('assets/data/bottomOpto.json').subscribe({
      next: (r) => (this.bottomOpto = r),
      error: (er) => console.log(er),
      complete: () => console.log(this.bottomOpto),
    });
    return this.bottomOpto;
  }
}
