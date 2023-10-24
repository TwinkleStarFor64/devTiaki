import { Component } from '@angular/core';
import { MedecinI, RealisationI,MessageJournalI  } from '../../partage/modeles/Types';
import { ParametreService } from './services/parametre.service';

@Component({
  selector: 'app-parametre',
  templateUrl: './parametre.component.html',
  styleUrls: ['./parametre.component.scss'],
})
export class ParametreComponent {
  public msgs: MessageJournalI[] = []; //Le contenu du tableau est décrit dans la méthode onCancel()
  public medecinImg!: string;
  public realisationImg!: string;
  public pacman!: string;

  public medecins: MedecinI[] = [
    {
      nom: 'Docteur David Ferreira',
    },
    {
      nom: 'Docteur Sebastian',
    },
    {
      nom: 'Docteur Rusco',
    },
  ];
  public realisations: RealisationI[] = [
    {
      nom: 'Occlumotricité',
    },
    {
      nom: 'Perception Tangram',
    },
    {
      nom: 'Planche',
    },
    {
      nom: "Ajout du plat 'Soupe de courgette'",
    },
  ];
  constructor(public echanges: ParametreService) {}

  ngOnInit() {
    this.pacman = 'assets/imageOutils/Maskgroup.svg';
    this.realisationImg = 'assets/imageOutils/whitePacman.svg';
    this.medecinImg = 'assets/imageOutils/medecin.svg';
    this.echanges.getEchangeMedecin();
    this.echanges.getEchangeOrga();
    this.echanges.getNomOrga();
  }
}
