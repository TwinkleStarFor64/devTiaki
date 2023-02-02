import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
      url:'/progressionOpto'
    },
    {
      title:"Nutrition",
      text:" Suivez les consommations caloriques, élaborez des menus, surveillez les allergies.",
      button:"Accéder à l'espace Nutrition",
      image:"assets/imgAsidebar/acc2.png",
      url:'/journalRepas'
    },
    {
      title:"Kinésithérapie",
      text:" Motricité, musculature, souplesse, découvrez et suivez des exercices quotidiens.",
      button:"Accéder à l'espace Kinésithérapie",
      image:"assets/imgAsidebar/acc3.png",
      url:'/progressionKine'
    },

  ]

  
  constructor(private router:Router) { }

  ngOnInit(): void {
 
  }
  public toNutri(): void{
    this.router.navigateByUrl('/journalRepas');
  }public toKine(): void{
    this.router.navigateByUrl('/progressionKine');
  }public toOpto(): void{
    this.router.navigateByUrl('/progressionOpto');
  }
 
 
}
 

