import { Component } from '@angular/core';

@Component({
  selector: 'app-kine',
  templateUrl: './kine.component.html',
  styleUrls: ['./kine.component.scss']
})
export class KineComponent {
  public cards:any = [
    {
      title:"Progression",
      text:" Suivez la progression des vos exercices et les médailles que vous avez gagnez.",
      button:"Accéder à la page de progression",
      image:"assets/imgKine/kine1.svg",
      url:'progression-Kine'
    },
    {
      title:"Programmes",
      text:" Suivez les programmes prescrit par vôtre kinésithérapeute.",
      button:"Accéder à la page contenant les programmes",
      image:"assets/imgKine/kine2.svg",
      url:'programme-Kine'
    },
    {
      title:"Exercices",
      text:"Réaliser les exercices en recherche libre ou recommander par vôtre kinésithérapeute.",
      button:"Accéder à la page d'exercices",
      image:"assets/imgKine/kine3.svg",
      url:'exercice-Kine'
    },

  ]
}
