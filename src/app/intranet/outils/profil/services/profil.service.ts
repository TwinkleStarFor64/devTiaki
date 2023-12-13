import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavTableau } from 'src/app/intranet/partage/modeles/Types';

@Injectable({
  providedIn: 'root',
})
export class ProfilService {
  bottomBarTableau: NavTableau[] = [];

  constructor(private http: HttpClient) {}

  // Récupération json des informations de la bottomBar Tableau de bord & Profil
  getNavTableau() {
    this.http
      .get<NavTableau[]>('assets/data/bottomTableau.json')
      .subscribe({
        next: (r) => (this.bottomBarTableau = r),
        error: (er) => console.log(er),
        complete: () => console.log(this.bottomBarTableau),
      });
    return this.bottomBarTableau;
  }
}
