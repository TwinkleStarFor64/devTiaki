import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-kine',
  templateUrl: './exercice-kine.component.html',
  styleUrls: ['./exercice-kine.component.scss']
})
export class ExerciceKineComponent implements OnInit {
  avatar!:string;
  public exercices:any = [
    {
      photo:'assets/iconeKineOpto/exercice1.png',
      title:"Muscles profonds",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra facilisis congue. Duis sit amet leo sed turpis molestie interdum. Praesent feugiat in libero et laoreet.",
      horloge:'assets/iconeKineOpto/horloge.svg',
      materiel:'assets/iconeKineOpto/materiel.svg',
      
    },
    {
      photo:'assets/iconeKineOpto/exercice2.png',
      title:"Étirements",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra facilisis congue. Duis sit amet leo sed turpis molestie interdum. Praesent feugiat in libero et laoreet.",
      horloge:'assets/iconeKineOpto/horloge.svg',
      materiel:'assets/iconeKineOpto/materiel.svg',
      
    },
    {
      photo:'assets/iconeKineOpto/exercice3.png',
      title:"Grenouille",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra facilisis congue. Duis sit amet leo sed turpis molestie interdum. Praesent feugiat in libero et laoreet.",
      horloge:'assets/iconeKineOpto/horloge.svg',
      materiel:'assets/iconeKineOpto/materiel.svg',
    
    },
    {
      photo:'assets/iconeKineOpto/exercice4.png',
      title:"Quotidien",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra facilisis congue. Duis sit amet leo sed turpis molestie interdum. Praesent feugiat in libero et laoreet.",
      horloge:'assets/iconeKineOpto/horloge.svg',
      materiel:'assets/iconeKineOpto/materiel.svg',
     
    },
    {
      photo:'assets/iconeKineOpto/exercice1.png',
      title:"Muscles profonds",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra facilisis congue. Duis sit amet leo sed turpis molestie interdum. Praesent feugiat in libero et laoreet.",
      horloge:'assets/iconeKineOpto/horloge.svg',
      materiel:'assets/iconeKineOpto/materiel.svg',
      
    },
    {
      photo:'assets/iconeKineOpto/exercice2.png',
      title:"Étirements",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra facilisis congue. Duis sit amet leo sed turpis molestie interdum. Praesent feugiat in libero et laoreet.",
      horloge:'assets/iconeKineOpto/horloge.svg',
      materiel:'assets/iconeKineOpto/materiel.svg',
      
    },
    {
      photo:'assets/iconeKineOpto/exercice3.png',
      title:"Grenouille",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra facilisis congue. Duis sit amet leo sed turpis molestie interdum. Praesent feugiat in libero et laoreet.",
      horloge:'assets/iconeKineOpto/horloge.svg',
      materiel:'assets/iconeKineOpto/materiel.svg',
    
    },
    {
      photo:'assets/iconeKineOpto/exercice4.png',
      title:"Quotidien",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra facilisis congue. Duis sit amet leo sed turpis molestie interdum. Praesent feugiat in libero et laoreet.",
      horloge:'assets/iconeKineOpto/horloge.svg',
      materiel:'assets/iconeKineOpto/materiel.svg',
     
    }

  ]

  constructor() { }

  ngOnInit(): void {
   
    this.avatar = 'assets/imgAsidebar/cheerleader1.svg';
  }

}
