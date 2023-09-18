import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageJournalI } from 'src/app/intranet/modeles/journal.js';
import {
  MedecinI,
  RealisationI,
} from 'src/app/intranet/modeles/Types';
import { SupabaseService } from 'src/app/partage/services/supabase.service';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss'],
})
export class JournalComponent implements OnInit {
  public msgs: MessageJournalI[] = []; //Le contenu du tableau est décrit dans la méthode onCancel()
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
      nom: "Ajout du plat 'Soupe de courgette'",
    },
  ];

  formJournal!: FormGroup;

  //Pourquoi je dois mettre any et pas HistoriqueJournalI ?
  public reliers: any[] = []; //

  constructor(private formBuilder: FormBuilder, public supa: SupabaseService) { }

  async ngOnInit(): Promise<void> {
    this.formJournal = this.formBuilder.group({
      objet: [null, [Validators.required]],
      description: [null, [Validators.required]],
      commentaire: [null],
      relier: [null],
    });
    this.pacman = 'assets/imageOutils/Maskgroup.svg';
    this.realisationImg = 'assets/imageOutils/whitePacman.svg';
    this.medecinImg = 'assets/imageOutils/medecin.svg';
    this.fetchJournals();
  }

  async fetchJournals() {
    //Ici je me récupére les données de la table journalEvenement via la méthode getHistoriqueJournal()
    const { data, error } = await this.supa.getHistoriqueJournal();
    if (data) {
      // Vérifiez que la propriété date est présente dans les objets data afin de trier l'affichage par date
      if (data[0].date) {
        // Tri des objets data par date décroissante
        data.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
      }
      this.reliers = data; //La variable reliers de type HistoriqueJournalI contient les données de data
      console.log(this.reliers); //Dans ce log je dois voir tout les journaux de la table journalEvenement
    }
    if (error) {
      console.log(error);
    }
  }

  //Méthode pour enregistrer un journal via le formulaire
  async onSubmitForm() {
    console.log(this.formJournal.value);
    //Ci-dessous j'attribue les valeurs
    const newEntry = {
      objet: this.formJournal.value.objet,
      description: this.formJournal.value.description,
      commentaire: this.formJournal.value.commentaire,
    };
    const idRelier = this.formJournal.value.relier;
    //J'utilise la méthode createJournal avec comme paramétre newEntry
    await this.supa.createJournal(newEntry, idRelier).then(() => {
      this.fetchJournals();
      window.location.reload(); // Bonne solution ??
    });
    this.formJournal.reset();
  }

  onCancel() {
    this.formJournal.reset();
  }
}

//public selectedJournal!: RelierI; //Sur cette variable ne pas oublier le !

/* this.reliers = [
      { nom: 'Journal du 5 Janvier 2022' },
      { nom: 'Journal du 10 Janvier 2022' },
      { nom: 'Journal du 15 Janvier 2022' },
      { nom: 'Journal du 20 Janvier 2022' },
    ]; */

/* onCancel() {
  this.confirmationService.confirm({
    message: 'Voulez-vous annuler votre enregistrement ?',
    header: 'Confirmation',
    icon: 'pi pi-info-circle',
    accept: () => {
      this.msgs = [
        {
          severity: 'info',
          summary: 'Confirmation',
          detail: 'Journal effacé',
        },
      ];
      this.formJournal.reset();
    },
    reject: () => {
      this.msgs = [
        { severity: 'info', summary: 'Confirmation', detail: 'Annulation' },
      ];
    },
  });
} */
