import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProfilI } from '../modeles/Types';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {
datasProfil: ProfilI[] = [];
  constructor(private http:HttpClient) { }
    // Récupérer les données du fichiers profils.json
    getDataProfil(){
      this.http.get<ProfilI[]>('assets/data/profil.json').subscribe(
        {
          next: dataProfil => {
            console.log(dataProfil);
            this.datasProfil = dataProfil;
          },
          error: er => console.log(er),
          complete: () => console.log("ok")
        }
      )
  }
  }