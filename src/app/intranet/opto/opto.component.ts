import { Component, OnInit } from '@angular/core';
import { SanityService } from 'src/app/partage/services/sanity.service';
import { AccueilI } from '../modeles/Types';

@Component({
  selector: 'app-opto',
  templateUrl: './opto.component.html',
  styleUrls: ['./opto.component.scss']
})
export class OptoComponent implements OnInit {
  // public cards: any = [
  //   {
  //     title: "Progression",
  //     text: " Suivez la progression des vos exercices et les médailles que vous avez gagnez.",
  //     button: "Accéder à la page de progression",
  //     image: "assets/imageOpto/imageOpto1.svg",
  //     url: 'progression-Opto'
  //   },
  //   {
  //     title: "Programmes",
  //     text: " Suivez les programmes prescrit par vôtre optométriste.",
  //     button: "Accéder à la page programmes",
  //     image: "assets/imageOpto/imageOpto2.svg",
  //     url: 'programme-Opto'
  //   },
  //   {
  //     title: "Exercices",
  //     text: "Réaliser les exercices en recherche libre ou recommander par vôtre optométriste.",
  //     button: "Accéder à la page d'exercices",
  //     image: "assets/imageOpto/imageOpto3.svg",
  //     url: 'exercice-Opto'
  //   },

  // ]
  accueilOpto!: AccueilI[];
  constructor(public sanity: SanityService) { }
  ngOnInit(): void {
    this.sanity.getAccueilOpto().then((data) => {
      this.accueilOpto = data.sort((a, b) => a.id - b.id);
    });
  }
}
