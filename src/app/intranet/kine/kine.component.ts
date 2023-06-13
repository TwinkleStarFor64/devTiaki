import { Component, OnInit } from '@angular/core';
import { SanityService } from 'src/app/services/sanity.service';
import { AccueilI } from '../modeles/Types';

@Component({
  selector: 'app-kine',
  templateUrl: './kine.component.html',
  styleUrls: ['./kine.component.scss'],
})
export class KineComponent implements OnInit {
  // public cards: any = [
  //   {
  //     title: 'Progression',
  //     text: ' Suivez la progression des vos exercices et les médailles que vous avez gagnez.',
  //     button: 'Accéder à la page de progression',
  //     image: 'assets/imgKine/kine1.svg',
  //     url: 'progression-Kine',
  //   },
  //   {
  //     title: 'Programmes',
  //     text: ' Suivez les programmes prescrit par vôtre kinésithérapeute.',
  //     button: 'Accéder à la page contenant les programmes',
  //     image: 'assets/imgKine/kine2.svg',
  //     url: 'programme-Kine',
  //   },
  //   {
  //     title: 'Exercices',
  //     text: 'Réaliser les exercices en recherche libre ou recommander par vôtre kinésithérapeute.',
  //     button: "Accéder à la page d'exercices",
  //     image: 'assets/imgKine/kine3.svg',
  //     url: 'exercice-Kine',
  //   },
  // ];

  accueilKine!: AccueilI[];
  constructor(public sanity: SanityService) { }
  ngOnInit(): void {
    this.sanity.getAccueilKine().then((data) => {
      this.accueilKine = data.sort((a, b) => a.id - b.id);
    });
  }

}
