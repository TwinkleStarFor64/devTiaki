import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EchangeI, OrganismeI } from 'src/app/intranet/utils/modeles/Types';

@Injectable({
  providedIn: 'root'
})
export class ParametreService {

  echangeMedecin: EchangeI[] = [];
  echangeOrga: EchangeI[] = [];
  nomOrga: OrganismeI[] = [];

  constructor(private http: HttpClient) { }

  getEchangeMedecin(){
    this.http.get<EchangeI[]>('assets/data/echangeMessage.json').subscribe(
      {
        next:r => this.echangeMedecin = r ,
        error: er => console.log(er),
        complete: () => console.log(this.echangeMedecin) 
      }
    );
    return this.echangeMedecin
  };
  getEchangeOrga(){
    this.http.get<EchangeI[]>('assets/data/echangeOrga.json').subscribe(
      {
        next:r => this.echangeOrga = r ,
        error: er => console.log(er),
        complete: () => console.log(this.echangeOrga) 
      }
    );
    return this.echangeOrga
  };
  getNomOrga(){
    this.http.get<OrganismeI[]>('assets/data/organisme.json').subscribe(
      {
        next:r => this.nomOrga = r ,
        error: er => console.log(er),
        complete: () => console.log(this.nomOrga) 
      }
    );
    return this.nomOrga
  };
}
