import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProgrammeOptoI } from 'src/app/intranet/utils/modeles/Types';

@Injectable({
  providedIn: 'root'
})
export class ProgrammeOptoService {

  programme:ProgrammeOptoI[] = [];

  constructor(private http:HttpClient) { }

  getProgrammeOpto(){
    this.http.get<ProgrammeOptoI[]>('assets/data/fakeDataProgramme.json').subscribe(
      {
        next:r => this.programme = r,
        error:er => console.log(er),
        complete:() => console.log(this.programme)  
      }
    );
  }
}
