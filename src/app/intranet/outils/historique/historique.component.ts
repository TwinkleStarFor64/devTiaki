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

  selectedHistorique?: HistoriqueJournalI;

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

  //Pourquoi je dois mettre any et pas HistoriqueJournalI ?
  public historiques: any[] = [];

  constructor(public supa: SupabaseService) { }

  //ngOnInit asynchrone qui renvoie une Promesse
  async ngOnInit(): Promise<void> {
    this.pacman = 'assets/imageOutils/Maskgroup.svg';
    this.realisationImg = 'assets/imageOutils/whitePacman.svg';
    this.medecinImg = 'assets/imageOutils/medecin.svg';

    // Attend la résolution de la promesse retournée par la méthode getHistoriqueJournal du service supa
    const { data, error } = await this.supa.getHistoriqueJournal();
    if (data) {
      //Data contient tout les journaux dans la table journalEvenement en BDD
      this.historiques = data; //La variable historique contient la variable data donc tout les journaux de la table journalEvenement en BDD
      console.log(this.historiques);
    }
    if (error) {
      //Si une erreur
      console.log(error);
    }
  }

  onSelect(journalHisto: HistoriqueJournalI) {
    this.selectedHistorique = journalHisto;
    console.log('Voici le journal : ' + this.selectedHistorique.objet);
  }
}

//Dans le console.log ci-dessous typeof permet de connaitre le type de l'objet date (string, number etc....)
//console.log(typeof this.historiques[0].date);








//public reliers: RelierI[]; //je remplis le tableau de RelierI dans le constructor en dessous

/* this.reliers = [
      { nom: 'Journal du 5 Janvier 2022' },
      { nom: 'Journal du 10 Janvier 2022' },
      { nom: 'Journal du 15 Janvier 2022' },
      { nom: 'Journal du 20 Janvier 2022' },
    ]; */

/* this.supa.getHistoriqueJournal().then((response:any) => {
      this.historiques = response.data
      console.log(this.historiques)
    }); */
