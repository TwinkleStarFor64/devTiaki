import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExerciceI } from 'src/app/intranet/modeles/Types';

@Injectable({
  providedIn: 'root',
})
export class ExerciceOptoService {
  exerciceOpto: ExerciceI[] = [];

  private exerciceUrl = 'assets/data/dataOpto.json';

  constructor(private http: HttpClient) {}

  getExerciceOpto() {
    this.http.get<ExerciceI[]>('assets/data/dataOpto.json').subscribe({
      next: (r) => (this.exerciceOpto = r),
      error: (er) => console.log(er),
      complete: () => console.log(this.exerciceOpto),
    });
    return this.exerciceOpto;
  }
}
