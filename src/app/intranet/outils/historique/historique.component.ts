import { Component, OnInit } from '@angular/core';
import { MedecinI, RealisationI, RelierI } from '../../modeles/Types';
import { SupabaseService } from 'src/app/services/supabase.service';
import { HistoriqueJournalI } from '../../modeles/Types';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.scss'],
})
export class HistoriqueComponent implements OnInit {
  public medecinImg!: string;
  public realisationImg!: string;
  public pacman!: string;

  public medecins: MedecinI[] = [
    {
      nom: 'Docteur Ferreira',
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
      nom: "Ajout de 'Soupe de courgette'",
    },
  ];

  public historiques: HistoriqueJournalI[] = [];

  public reliers: RelierI[]; //je remplis le tableau de RelierI dans le constructor en dessous

  constructor(public supa: SupabaseService) {
    this.reliers = [
      { nom: 'Journal du 5 Janvier 2022' },
      { nom: 'Journal du 10 Janvier 2022' },
      { nom: 'Journal du 15 Janvier 2022' },
      { nom: 'Journal du 20 Janvier 2022' },
    ];
  }

  async ngOnInit(): Promise<void> {
    this.pacman = 'assets/imageOutils/Maskgroup.svg';
    this.realisationImg = 'assets/imageOutils/whitePacman.svg';
    this.medecinImg = 'assets/imageOutils/medecin.svg';

    /* this.supa.getHistoriqueJournal().then((response:any) => {
      this.historiques = response.data
      console.log(this.historiques)
    }); */

    const { data, error } = await this.supa.getHistoriqueJournal();
    if (data) {
      this.historiques = data;
      console.log(this.historiques);
    }
    if (error) {
      console.log(error);
    }
  }
}
