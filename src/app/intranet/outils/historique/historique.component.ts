import { Component, OnInit } from '@angular/core';
import { MedecinI, RealisationI, RelierI } from '../../modeles/Types';
import { SupabaseService } from 'src/app/services/supabase.service';
import { HistoriqueJournalI } from '../../modeles/Types';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DeleteComponent } from '../dialog/delete/delete.component';

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

  constructor(public supa: SupabaseService, private dialog:MatDialog) {}

  //ngOnInit asynchrone qui renvoie une Promesse
  async ngOnInit(): Promise<void> {
    this.pacman = 'assets/imageOutils/Maskgroup.svg';
    this.realisationImg = 'assets/imageOutils/whitePacman.svg';
    this.medecinImg = 'assets/imageOutils/medecin.svg';

    // Attend la résolution de la promesse retournée par la méthode getHistoriqueJournal du service supa
    const { data, error } = await this.supa.getHistoriqueJournal();
    if (data) {
      // Vérifiez que la propriété date est présente dans les objets data afin de trier l'affichage par date
      if (data[0].date) {
        // Tri des objets data par date décroissante
        data.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
      }
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
    console.log('Voici le journal : ' + this.selectedHistorique.objet + "Avec l'id de groupe " + this.selectedHistorique.groupeEvenement.id);
    this.selectedId = journalHisto.groupeEvenement.id;
    console.log(this.selectedId);
  }

  openDialog() {
    return this.dialog.open(DeleteComponent, {
      disableClose:true,
      autoFocus:true,
      height:'200px',
      width:'400px',
      data:"Êtes vous sur de vouloir supprimer ce journal ?",
    });
}

  deleteJournal( id: number ) {
    this.openDialog()
    .afterClosed().subscribe(res => {
      if(res) {
        this.supa
      .deleteJournal(id)
      .then(() => {
        window.location.reload();
        this.supa.getHistoriqueJournal();
        console.log("j'ai cliqué sur l'id " + id);
      })
      .catch((error) => {
        console.log(error);
      });
      }
      
    })

    /* this.supa
      .deleteJournal(id)
      .then(() => {
        window.location.reload();
        this.supa.getHistoriqueJournal();
        console.log("j'ai cliqué sur l'id " + id);
      })
      .catch((error) => {
        console.log(error);
      }); */
  }

  

}

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
