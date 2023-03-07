import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProgrammeOptoI } from 'src/app/intranet/utils/modeles/Types';

@Injectable({
  providedIn: 'root'
})
export class ProgrammeOptoService {

  programme:ProgrammeOptoI[] = [];

  private programmeUrl = 'assets/data/dataOpto.json';

  constructor(private http: HttpClient) { }

  getProgrammeOpto(): Observable<ProgrammeOptoI[]> {
    return this.http.get<ProgrammeOptoI[]>(this.programmeUrl);
  }
}
