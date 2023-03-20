import { Component } from '@angular/core';
import { TableauEnCoursI, TableauBordHistoriqueI, TableauBordMedecinI, TableauBordProblemeI, TableauReussiteI } from '../utils/modeles/Types';
import { TableauService } from './services/tableau.service';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss']
})
export class TableauComponent {
  enCours?:TableauEnCoursI;
  reussite?:TableauReussiteI ;
  historique?:TableauBordHistoriqueI;
  probleme?:TableauBordProblemeI;
  medecin?:TableauBordMedecinI
  public titre:[{}] = [
    {
      nutrition:"Pour la nutrition",
      kine:"Pour la kiné",
      opto:"Pour la vison et l'optométrie",
      general:"Pour le suivi général"
    }
  ]

  constructor(public tableaux: TableauService){}

  ngOnInit(){
    this.tableaux.getTableauBordHistorique();
    this.tableaux.getTableauBordMedecin();
    this.tableaux.getTableauBordProbleme();
    this.tableaux.getTableauEnCours();
    this.tableaux.getTableauReussite();
  }
}
