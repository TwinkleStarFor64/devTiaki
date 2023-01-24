import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CityI, HistoriqueI, JournalI, MedecinI, RealisationI } from 'src/app/modeles/Types';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss']
})
export class JournalComponent implements OnInit {
  // selectedCity1!: CityI;
  // cities: CityI[];
  selectJournal!:HistoriqueI;
  journal!:HistoriqueI[];

  public medecins:MedecinI[] = [
    {
      nom:"Martin Genoise"
    },
    {
      nom:"Roger Lagourge"
    },
    {
      nom:"Michel Poiton"
    }
  ];

  public realisations:RealisationI[] = [
    {
      nom:"Exercice Opto 1"
    },
    {
      nom:"Exercice Opto 2"
    },
    {
      nom:"Exercice Kiné 1"
    },
    {
      nom:"Ajout d'un plat"
    }
  ]

  formJournal!:FormGroup;

  constructor(private formBuilder:FormBuilder) { 

  //   this.journal.push = [
  //     {
  //       [
  //       date:new Date(),
  //       objet:"journal allergie",
  //       note:"Tout est ok",
  //       commentaire:"enfin",
  //       journalPrecedent:[

  //       ]

  //       ]
  //   }
  // ];

  }

  ngOnInit(): void {
    this.formJournal = this.formBuilder.group({
      objet: [null],
      note: [null],
      commentaire: [null],
      relier: [null]
    })
  }

  onSubmitForm() {
    console.log(this.formJournal.value);
}
}