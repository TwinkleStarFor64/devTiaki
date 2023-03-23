import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageJournalI } from 'src/app/intranet/modeles/journal.js';

import {
  HistoriqueI,
  MedecinI,
  RealisationI,
  RelierI,
} from 'src/app/intranet/modeles/Types';

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

  formJournal!: FormGroup;
  //public selectedJournal!: RelierI; //Sur cette variable ne pas oublier le !
  public reliers: RelierI[]; //je remplis le tableau de RelierI dans le constructor en dessous

  constructor( private formBuilder: FormBuilder ) {
    this.reliers = [
      { nom: 'Journal du 5 Janvier 2022' },
      { nom: 'Journal du 10 Janvier 2022' },
      { nom: 'Journal du 15 Janvier 2022' },
      { nom: 'Journal du 20 Janvier 2022' },
    ];
  }

  ngOnInit(): void {
    this.formJournal = this.formBuilder.group({
      objet: [null, [Validators.required]],
      note: [null, [Validators.required]],
      commentaire: [null],
      relier: [null],
    });
    this.pacman = 'assets/imageOutils/Maskgroup.svg';
    this.realisationImg = 'assets/imageOutils/whitePacman.svg';
    this.medecinImg = 'assets/imageOutils/medecin.svg';
  }

  onSubmitForm() {
    console.log(this.formJournal.value);
    this.formJournal.reset();
  }

  onCancel() {
    this.formJournal.reset();    
  }

}





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