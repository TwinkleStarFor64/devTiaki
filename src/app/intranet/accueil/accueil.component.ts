import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  public cards:any = [
    {
      title:"Optométrie",
      text:" Des exercices conseillés, des tutoriels et un suivi quotidien.",
      button:"Accéder à l'espace Optométrie",
      image:"assets/imgAsidebar/acc1.png",
      url:'opto/progressionOpto'
    },
    {
      title:"Nutrition",
      text:" Suivez les consommations caloriques, élaborez des menus, surveillez les allergies.",
      button:"Accéder à l'espace Nutrition",
      image:"assets/imgAsidebar/acc2.png",
      url:'nutrition/journalRepas'
    },
    {
      title:"Kinésithérapie",
      text:" Motricité, musculature, souplesse, découvrez et suivez des exercices quotidiens.",
      button:"Accéder à l'espace Kinésithérapie",
      image:"assets/imgAsidebar/acc3.png",
      url:'kine/progressionKine'
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
