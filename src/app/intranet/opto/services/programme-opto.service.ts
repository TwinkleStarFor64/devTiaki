import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProgrammeI } from 'src/app/intranet/partage/modeles/Types';

@Injectable({
  providedIn: 'root',
})
export class ProgrammeOptoService {
  programme: ProgrammeI[] = [];

  private programmeUrl = 'assets/data/dataOpto.json';

  constructor(private http: HttpClient) {}

  getProgrammeOpto(): Observable<ProgrammeI[]> {
    return this.http.get<ProgrammeI[]>(this.programmeUrl);
  }
}
