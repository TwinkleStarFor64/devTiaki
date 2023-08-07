import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ExerciceI } from 'src/app/intranet/modeles/Types';

@Injectable({
  providedIn: 'root'
})
export class ExerciceKineService {
  exerciceKine:ExerciceI[] = [];

  private exerciceUrl = 'assets/data/dataKine.json';

  constructor(private http: HttpClient) { }

  getExerciceKine()  {
    this.http.get<ExerciceI[]>('assets/data/dataKine.json').subscribe(
      {
        next:r => this.exerciceKine = r,
        error:er => console.log(er),
        complete: () => console.log(this.exerciceKine)
      }
    );
    return this.exerciceKine
  };

}
