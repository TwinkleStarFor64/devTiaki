import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  cards:any = [
    {
      title:"Optométrie",
      text:" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem",
      button:"Accéder à l'espace Optométrie",
      image:"../../../assets/img/opto.svg"
    },
    {
      title:"Nutrition",
      text:" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem",
      button:"Accéder à l'espace Nutrition",
      image:"../../../assets/img/nutrition.svg"
    },
    {
      title:"Kinésithérapie",
      text:" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem",
      button:"Accéder à l'espace Kinésithérapie",
      image:"../../../assets/img/kinésithérapie.svg"
    },

  ]

  
  constructor() { }

  ngOnInit(): void {

  }

}
