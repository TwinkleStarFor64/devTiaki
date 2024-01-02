import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RealisationI } from '../../../partage/modeles/Types';
import { DeleteComponent } from '../dialog/delete/delete.component';
import { MatDialog } from '@angular/material/dialog';
import { DonneesService } from '../../partage/services/donnees.service';
import { EditService } from '../../partage/services/edit.service';

@Component({
  selector: 'app-edit-journal',
  templateUrl: './edit-journal.component.html',
  styleUrls: ['./edit-journal.component.scss'],
})
export class EditJournalComponent {
  formJournal!: FormGroup;
  public reliers: any[] = [];
  public medecinImg!: string;
  public realisationImg!: string;
  public pacman!: string;

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

  constructor(
    private formBuilder: FormBuilder,
    private router: ActivatedRoute,
    private route: Router,
    private dialog: MatDialog,
    public get:DonneesService,
    private edit:EditService
  ) {}

  async ngOnInit(): Promise<void> {
    this.pacman = 'assets/imageOutils/Maskgroup.svg';
    this.realisationImg = 'assets/imageOutils/whitePacman.svg';
    this.medecinImg = 'assets/imageOutils/medecin.svg';

    // Ci-dessous je déclare un formulaire par défaut
    this.formJournal = this.formBuilder.group({
      objet: [null, [Validators.required]],
      description: [null, [Validators.required]],
      commentaire: [null],
      relier: [null],
    });

    this.fetchJournals();

    // Ci-dessous j'utilise la propriété snapshot de l'objet router d'Angular pour récupérer les paramètres de la route actuelle
    // La méthode snapshot retourne une capture instantanée de l'état de la route au moment de son appel.
    // Dans ce cas, je récupére le paramètre 'id' de la route en accédant à la propriété 'params' de l'objet snapshot
    console.log('snapshot id', this.router.snapshot.params['id']);
    // J'appelle getCurrentJournal(id: number) - j'attribue à id de la méthode l'id que je récupére avec snapshot
    const result = await this.get.getCurrentJournal(
      this.router.snapshot.params['id']
    );

    result.forEach(async (journal) => {
      // forEach sur result - j'attribue le résultat à la variable journal
      console.log('journal.groupeEvenement',(journal.groupeEvenement as { id: any })?.id);

      const { data: linkedJournals } =
        await this.get.getHistoriqueLinkedJournal(
          (journal.groupeEvenement as { id: any })?.id,
          journal.id
        );

      console.log('linkedJournals', linkedJournals);

      // J'attribue en value au formulaire les données de la variable journal
      this.formJournal = new FormGroup({
        objet: new FormControl(journal.objet, [Validators.required]),
        description: new FormControl(journal.description, [Validators.required]),
        commentaire: new FormControl(journal.commentaire),
        relier: new FormControl(linkedJournals && linkedJournals.length > 0 ? linkedJournals[0] : null),
      });

      console.log('formJournal', this.formJournal);
    });
  }

  async fetchJournals() {
    //Ici je me récupére les données de la table journalEvenement via la méthode getHistoriqueJournal()
    const { data, error } = await this.get.getHistoriqueJournal();
    if (data) {
      // Vérifiez que la propriété date est présente dans les objets data afin de trier l'affichage par date
      if (data[0].date) {
        // Tri des objets data par date décroissante
        data.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
      }
      this.reliers = data; //La variable reliers de type HistoriqueJournalI contient les données de data
      //console.log(this.reliers);//Dans ce log je dois voir tout les journaux de la table journalEvenement
    }
    if (error) {
      console.log(error);
    }
  }

  openDialog() {
    // Modal Material Angular
    return this.dialog.open(DeleteComponent, {
      disableClose: true,
      autoFocus: true,
      height: '200px',
      width: '400px',
      data: 'Êtes vous sur de vouloir modifier ce journal ?',
    });
  }

  // Méthode pour enregistrer un journal via le formulaire
  onSubmitForm() {
    console.log(this.formJournal.value);
    // Ci-dessous j'attribue les valeurs au formulaire
    const newEntry = {
      objet: this.formJournal.value.objet,
      description: this.formJournal.value.description,
      commentaire: this.formJournal.value.commentaire,
    };
    const idRelier = this.formJournal.value.relier;
    const id = this.router.snapshot.params['id']; // snapshot de l'id sur l'url

    this.openDialog() // La méthode au dessus pour la modal
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          //J'utilise la méthode updateJournal avec comme paramétre l'id obtenue avec snapshot et la variable newEntry
          this.edit
            .updateJournal(id, newEntry)
            .then(() => {
              this.route.navigateByUrl('/intranet/outils/historique'); // Je retourne sur la page historique
            })
            .catch((error) => {
              // En cas d'erreur
              console.log(error);
            });
        }
      });
  }

  onCancel() {
    this.route.navigateByUrl('/intranet/outils/historique'); // Je retourne sur la page historique
  }
}
