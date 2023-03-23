import { Component, OnInit } from '@angular/core';
import { MedecinI, RealisationI } from '../../modeles/Types';

@Component({
  selector: 'app-messagerie',
  templateUrl: './messagerie.component.html',
  styleUrls: ['./messagerie.component.scss']
})
export class MessagerieComponent implements OnInit {

  public medecinImg!: string;
  public blackMedecinImg!: string;
  public realisationImg!: string;
  
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

  constructor() { }

  ngOnInit(): void {
    this.realisationImg = 'assets/imageOutils/whitePacman.svg';
    this.medecinImg = 'assets/imageOutils/medecin.svg';
    this.blackMedecinImg = 'assets/imageOutils/blackMedecin.svg'
  }

}
