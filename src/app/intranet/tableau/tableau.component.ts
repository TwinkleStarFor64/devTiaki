import { Component } from '@angular/core';
import {
  TableauEnCoursI,
  TableauBordHistoriqueI,
  TableauBordMedecinI,
  TableauBordProblemeI,
  TableauReussiteI,
  SanteI,
} from '../utils/modeles/Types';
import { TableauService } from './services/tableau.service';
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
          <li>Repas végétarien le 12/03/23</li>
        </ul>
        <h4>
          Sur la kiné
        </h4>
        <ul [class.active]>
          <li>Grenouille réalisé avec succès!</li>
          <li>Planche bien soutenue</li>
        </ul>
        <h4>
          La vision et l'optométrie
        </h4>
        <ul>
          <li>Perception Tangram superbement réalisée</li>
          <li>Planche bien soutenue</li>
        </ul>
      `,
    },
    {
      header: 'Médecins',
      content: `
        <h4>
          Pour la nutrition
        </h4>
        <ul>
          <li>Docteur Risco</li>
          <li>Docteur Risco</li>
          <li>Docteur Risco</li>
        </ul>
        <h4>
          Sur la kiné
        </h4>
        <ul>
          <li>Docteur Ferreira</li>
          <li>Docteur Sebastian</li>
        </ul>
        <h4>
          La vision et l'optométrie
        </h4>
        <ul>
          <li>Docteur Leugbig</li>
          <li>Docteur CHAN</li>
        </ul>
      `,
    },
    {
      header: 'Problèmes particuliers',
      content: `
        <h4>
          Pour la nutrition
        </h4>
        <ul>
          <li>Allergie aux fruits à cocque</li>
        </ul>
        <h4>
          Sur la kiné
        </h4>
        <ul>
          <li>Problème d'équilibre</li>
          <li>Docteur Sebastian</li>
        </ul>
        <h4>
          La vision et l'optométrie
        </h4>
        <ul>
          <li>Soucis au niveau de l'occulomotricité</li>
          <li>Docteur CHAN</li>
        </ul>    `,
    },
    { header: 'Médical', content: '<ul><li>Docteur Ferreira</li></ul>' },
    {
      header: 'Animations/Rencontres',
      content:
        `<ul>
        <li>15-02-23 : Justine vient à la maison</li>
        <li>16-05-23 : Visite des grands parents</li>
        </ul>`,
    },
    { header: 'La communauté',
     content:  `<ul>
     <li>14-02-23 : Cinéma </li>
     <li>24-11-23 : Café Le Méliange</li>
     </ul>`,
    }

  ];

public sante: SanteI[] = [
  {
    img:'assets/iconeTableau/profil.png',
    nom:'Profil de santé'
  },
  {
    img:'assets/iconeTableau/condition.png',
    nom:'Condition générale'
  },
  {
    img:'assets/iconeTableau/premierTemps.png',
    nom:'Premier temps'
  },
  {
    img:'assets/iconeTableau/gestation.png',
    nom:'Gestation'
  },
  {
    img:'assets/iconeTableau/accouchement.png',
    nom:'Accouchement'
  },
  {
    img:'assets/iconeTableau/suivi.png',
    nom:'Suivi médical'
  },
  {
    img:'assets/iconeTableau/examen.png',
    nom:'Examens complémentaires'
  }
]

  constructor(
    public tableaux: TableauService,
    private sanitizer: DomSanitizer
  ) {}

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
    console.log(this.sante)
  }
}
