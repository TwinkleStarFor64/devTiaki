import { Component, ElementRef } from '@angular/core';
import {
  TableauEnCoursI,
  TableauBordHistoriqueI,
  TableauBordMedecinI,
  TableauBordProblemeI,
  TableauReussiteI,
} from '../utils/modeles/Types';
import { TableauService } from './services/tableau.service';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss'],

})
export class TableauComponent {

  enCours?: TableauEnCoursI;
  reussite?: TableauReussiteI;
  historique?: TableauBordHistoriqueI;
  probleme?: TableauBordProblemeI;
  medecin?: TableauBordMedecinI;
  expandedIndex = 0;
  listeGenerale: string = '';


  public items = [
    { 
      header: 'Historiques des évenements',
      content: `
        <h4>
          Pour la nutrition
        </h4>
        <ul>
          <li>{{ liste.histoNutri }}</li>
        </ul>
        <h4>
          Sur la kiné
        </h4>
        <ul [class.active]>
          <li>{{ liste.histoKine }}</li>
          <li>Planche bien soutenue</li>
        </ul>
        <h4>
          La vision et l'optométrie
        </h4>
        <ul>
          <li>{{ liste.histoOpto }}</li>
          <li>Planche bien soutenue</li>
        </ul>
      `
    },
    { 
      header: 'Médecins',
      content: `
        <h4>
          Pour la nutrition
        </h4>
        <ul>
          <li>{{ liste.medecinNutri }}</li>
        </ul>
        <h4>
          Sur la kiné
        </h4>
        <ul>
          <li>{{ liste.general }}</li>
          <li>Docteur Sebastian</li>
        </ul>
        <h4>
          La vision et l'optométrie
        </h4>
        <ul>
          <li>{{ liste.medecinOpto }}</li>
          <li>Docteur CHAN</li>
        </ul>
      `
    },
    { 
      header: 'Problèmes particuliers',
      content: `
        <h4>
          Pour la nutrition
        </h4>
        <ul>
          <li>{{ liste.problemeNutri }}</li>
        </ul>
        <h4>
          Sur la kiné
        </h4>
        <ul>
          <li>{{ liste.problemeKine }}</li>
          <li>Docteur Sebastian</li>
        </ul>
        <h4>
          La vision et l'optométrie
        </h4>
        <ul>
          <li>{{ liste.problemeOpto }}</li>
          <li>Docteur CHAN</li>
        </ul>
      `
    },
    { header: 'Médical', content: '' },
    { header: 'Animations/Rencontres', content: '' },
    { header: 'La communauté', content: '' }
  ];
  

  public titre: [{}] = [
    {
      nutrition: 'Pour la nutrition',
      kine: 'Pour la kiné',
      opto: "Pour la vison et l'optométrie",
      general: 'Pour le suivi général',
    },
  ];

  constructor(
    public tableaux: TableauService,
    private sanitizer: DomSanitizer
  ) { }
sanitizeHTML(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  ngOnInit() {
    this.tableaux.getTableauBordHistorique();
    this.tableaux.getTableauBordMedecin();
    this.tableaux.getTableauBordProbleme();
    this.tableaux.getTableauEnCours();
    this.tableaux.getTableauReussite();
    this.tableaux.getBottomBarTableau();
  }
}
