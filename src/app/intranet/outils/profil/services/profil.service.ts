import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BottomBarTableau } from 'src/app/intranet/utils/modeles/Types';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  bottomBarTableau:BottomBarTableau [] = [];

  constructor(private http:HttpClient) { }

  // Récupération json des informations de la bottomBar Tableau de bord & Profil
  getBottomBarTableau(){
    this.http.get<BottomBarTableau[]>('assets/data/bottomTableau.json').subscribe(
      {
        next:r => this.bottomBarTableau = r,
        error:er => console.log(er),
        complete: () => console.log(this.bottomBarTableau) 
      }
    );
    return this.bottomBarTableau
  };
}
