import { Component, OnInit } from '@angular/core';
import { MedecinI, RealisationI, RelierI } from '../../modeles/Types';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.scss']
})
export class HistoriqueComponent implements OnInit {

  public medecinImg!: string;
  public realisationImg!: string;
  public pacman!: string;

  public medecins: MedecinI[] = [
    {
      nom: 'Martin Genoise',
    },
    {
      nom: 'Roger Lagourge',
    },
    {
      nom: 'Michel Poiton',
    },
  ];

  public realisations: RealisationI[] = [
    {
      nom: 'Exercice Opto 1',
    },
    {
      nom: 'Exercice Opto 2',
    },
    {
      nom: 'Exercice Kiné 1',
    },
    {
      nom: "Ajout d'un plat",
    },
  ];

  public reliers: RelierI[]; //je remplis le tableau de RelierI dans le constructor en dessous

  constructor() { 
    this.reliers = [
      { nom: 'Journal du 5 Janvier 2022' },
      { nom: 'Journal du 10 Janvier 2022' },
      { nom: 'Journal du 15 Janvier 2022' },
      { nom: 'Journal du 20 Janvier 2022' },
    ];
  }

  ngOnInit(): void {
    this.pacman = 'assets/imageOutils/Maskgroup.svg';
    this.realisationImg = 'assets/imageOutils/whitePacman.svg';
    this.medecinImg = 'assets/imageOutils/medecin.svg';
  }

}
