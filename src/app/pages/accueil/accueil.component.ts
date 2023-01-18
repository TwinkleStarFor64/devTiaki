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
      text:" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem",
      button:"Accéder à l'espace Optométrie",
      image:"assets/imgAsidebar/acc1.png"
    },
    {
      title:"Nutrition",
      text:" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem",
      button:"Accéder à l'espace Nutrition",
      image:"assets/imgAsidebar/acc2.png"
    },
    {
      title:"Kinésithérapie",
      text:" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem",
      button:"Accéder à l'espace Kinésithérapie",
      image:"assets/imgAsidebar/acc3.png"
    },

  ]

  
  constructor(private router:Router) { }

  ngOnInit(): void {
 
  }
  public toNutri(): void{
    this.router.navigateByUrl('/nutrition');
  }public toKine(): void{
    this.router.navigateByUrl('/exerciceKine');
  }public toOpto(): void{
    this.router.navigateByUrl('/optométrie');
  }
 
}
 

