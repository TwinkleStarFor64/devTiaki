import { Component, OnInit } from '@angular/core';
import { SanityService } from 'src/app/partage/services/sanity.service';
import { AccueilI } from '../modeles/Types';

@Component({
    selector: 'app-accueil',
    templateUrl: './accueil.component.html',
    styleUrls: ['./accueil.component.scss'],
    standalone: false
})
export class AccueilComponent implements OnInit {

  // public cards:any = [
  //   {
    //     title:"Optométrie",
    //     text:" Des exercices conseillés, des tutoriels et un suivi quotidien.",
    //     button:"Accéder à l'espace Optométrie",
  //     image:"assets/imgAsidebar/acc1.png",
  //     url:'opto'
  //   },
  //   {
  //     title:"Nutrition",
  //     text:" Suivez les consommations caloriques, élaborez des menus, surveillez les allergies.",
  //     button:"Accéder à l'espace Nutrition",
  //     image:"assets/imgAsidebar/acc2.png",
  //     url:'nutrition'
  //   },
  //   {
    //     title:"Kinésithérapie",
    //     text:" Motricité, musculature, souplesse, découvrez et suivez des exercices quotidiens.",
  //     button:"Accéder à l'espace Kinésithérapie",
  //     image:"assets/imgAsidebar/acc3.png",
  //     url:'kine'
  //   },

  // ]

  imageAccueil!: AccueilI[];

  constructor( public sanity: SanityService) {}

 ngOnInit(): void {
  this.sanity.getAccueil().then((data) => {
    this.imageAccueil = data.sort((a, b) => a.id - b.id);
    });
  }
}
