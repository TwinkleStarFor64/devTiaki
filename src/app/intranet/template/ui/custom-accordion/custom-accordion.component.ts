import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-accordion',
  templateUrl: './custom-accordion.component.html',
  styleUrls: ['./custom-accordion.component.scss'],
})
export class CustomAccordionComponent {
  @Input() items: any[];
  expandedIndex = 0;

  constructor() {
    this.items = [ {
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
      `,
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
      `,
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
        </ul>    `,
    },
    { header: 'Médical', content: '' },
    { header: 'Animations/Rencontres', content: '' },
    { header: 'La communauté', content: '' },
  ];
  }

  toggleAccordion(index: number) {
    if (this.expandedIndex === index) {
      this.expandedIndex = -1; // Ferme l'élément actuellement ouvert
    } else {
      this.expandedIndex = index;
    }
  }
}
