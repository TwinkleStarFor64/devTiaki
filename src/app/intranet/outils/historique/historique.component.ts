import { Component, OnInit } from '@angular/core';
import { MedecinI, RealisationI, RelierI } from '../../modeles/Types';
import { SupabaseService } from 'src/app/services/supabase.service';
import { HistoriqueJournalI } from '../../modeles/Types';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from '../dialog/delete/delete.component';
import { FormControl } from '@angular/forms';

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
  selectedId!: number;

  filtre: string = '';

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

  public groupeEvenementId!: number;

  public historiqueSelect: FormControl = new FormControl();
  filtreControl = new FormControl(); // Pour ngx-mat-select-search

  constructor(public supa: SupabaseService, private dialog: MatDialog) { }

  //ngOnInit asynchrone qui renvoie une Promesse
  async ngOnInit(): Promise<void> {
    this.pacman = 'assets/imageOutils/Maskgroup.svg';
    this.realisationImg = 'assets/imageOutils/whitePacman.svg';
    this.medecinImg = 'assets/imageOutils/medecin.svg';
    this.fetchJournals();
  }

  async fetchJournals() {
    // Attend la résolution de la promesse retournée par la méthode getHistoriqueJournal du service supa
    const { data, error } = await this.supa.getHistoriqueJournal();

    if (data) {
      data.forEach(async (journal: any) => {
        const { data: linkedData, error: linkedError } =
          await this.supa.getHistoriqueLinkedJournal(
            // La méthode dans supabase.service qui filtre les journaux avec l'id de groupeEvenement
            // Cette méthode récupére tout les journaux
            // Ci-dessous les ID à utiliser pour filtrer
            journal.groupeEvenement.id,
            journal.id
          );

        if (linkedError) console.log(linkedError);

        if (linkedData) {
          // Tri des linked journals par date décroissante
          linkedData.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          );

          // On affiche l'objet "journal" qui est ajouté au tableau "historiques"
          console.log({
            ...journal,
            linkedJournals: linkedData,
          });

          this.historiques.push({
            ...journal,
            linkedJournals: linkedData,
            // linkedJournals contient les journaux avec le même ID dans groupeEvenement
          });
          // Tri des objets historiques par date décroissante
          this.historiques.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          );
        }
      });
    }

    if (error) {
      //Si une erreur
      console.log(error);
    }
  }

  changeSelectedJournal(id: number) {
    // On modifie le "this.selectedHistorique" par le journal dont l'id est égal à "id"
    this.selectedHistorique = this.historiques.find(
      (journal) => journal.id === id
    );
  }

  openDialog() {
    // Modal Material Angular
    return this.dialog.open(DeleteComponent, {
      disableClose: true,
      autoFocus: true,
      height: '200px',
      width: '400px',
      data: 'Êtes vous sur de vouloir supprimer ce journal ?',
    });
  }

  deleteJournal(id: number) {
    this.openDialog() // La méthode au dessus pour la modal
      .afterClosed()
      // subscribe() est une méthode qui permet de souscrire à un observable et de recevoir les événements qui y sont émis.
      .subscribe((res) => {
        if (res) {
          this.supa
            .deleteJournal(id)
            .then(() => {
              this.fetchJournals();
              window.location.reload(); // Bonne solution ??
            })
            .catch((error) => {
              console.log(error);
            });
        }
      });
  }

}

/* onSelect(journalHisto: HistoriqueJournalI) {
    this.selectedHistorique = journalHisto;
    console.log(
      'Voici le journal : ' +
        this.selectedHistorique.objet +
        "Avec l'id de groupe " +
        this.selectedHistorique.groupeEvenement.id
    );
    this.selectedId = journalHisto.groupeEvenement.id;
    console.log(this.selectedId);
  } */

//const dialogConfig = new MatDialogConfig();

//dialogConfig.disableClose = true;
//dialogConfig.autoFocus = true;

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
