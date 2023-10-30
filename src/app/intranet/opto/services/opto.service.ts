import { Injectable } from '@angular/core';
import { ProgrammeI } from '../../partage/modeles/Types';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OptoService {

  programmes:Array<ProgrammeI> = [];

  constructor(private http: HttpClient) {}

  getProgrammes(){
    return this.http.get<Array<ProgrammeI>>('assets/data/opto-exos.json');
  }
}
