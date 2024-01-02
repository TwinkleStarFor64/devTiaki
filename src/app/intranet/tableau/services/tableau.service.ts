import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  TableauEnCoursI,
  TableauBordHistoriqueI,
  TableauBordTherapeuteI,
  TableauBordProblemeI,
  TableauReussiteI,
  NavTableau,
} from '../../../partage/modeles/Types';

@Injectable({
  providedIn: 'root',
})
export class TableauService {
  tableauReussite: TableauReussiteI[] = [];
  tableauEnCours: TableauEnCoursI[] = [];
  tableauBordHistorique: TableauBordHistoriqueI[] = [];
  tableauBordMedecin: TableauBordTherapeuteI[] = [];
  tableauBordProbleme: TableauBordProblemeI[] = [];
  bottomBarTableau: NavTableau[] = [];
  constructor(private http: HttpClient) {}

  // Recupération des données json des reussites du tableau
  getTableauReussite() {
    this.http
      .get<TableauReussiteI[]>('assets/data/tableauReussite.json')
      .subscribe({
        next: (r) => (this.tableauReussite = r),
        error: (er) => console.log(er),
        complete: () => console.log(this.tableauReussite),
      });
    return this.tableauReussite;
  }
  // Recupération des données json des reussites du tableau
  getTableauEnCours() {
    this.http
      .get<TableauEnCoursI[]>('assets/data/tableauEnCours.json')
      .subscribe({
        next: (r) => (this.tableauEnCours = r),
        error: (er) => console.log(er),
        complete: () => console.log(this.tableauEnCours),
      });
    return this.tableauEnCours;
  }

  // Récupération des données json du bas du tableau de bord historique
  getTableauBordHistorique() {
    this.http
      .get<TableauBordHistoriqueI[]>('assets/data/tableauBordHistorique.json')
      .subscribe({
        next: (r) => (this.tableauBordHistorique = r),
        error: (er) => console.log(er),
        complete: () => console.log(this.tableauBordHistorique),
      });
    return this.tableauBordHistorique;
  }

  // Recuperation json du tableau de bord "problemes rencontrés"
  getTableauBordProbleme() {
    this.http
      .get<TableauBordProblemeI[]>('assets/data/tableauBordProbleme.json')
      .subscribe({
        next: (r) => (this.tableauBordProbleme = r),
        error: (er) => console.log(er),
        complete: () => console.log(this.tableauBordProbleme),
      });
    return this.tableauBordProbleme;
  }

  // Recuperation json du tableau de bord des medecin
  getTableauBordMedecin() {
    this.http
      .get<TableauBordTherapeuteI[]>('assets/data/tableauBordMedecin.json')
      .subscribe({
        next: (r) => (this.tableauBordMedecin = r),
        error: (er) => console.log(er),
        complete: () => console.log(this.tableauBordMedecin),
      });
    return this.tableauBordMedecin;
  }
  // Récupération json des information de la bottomBar Tableau de bord
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
