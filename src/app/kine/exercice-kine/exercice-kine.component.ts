import { Component, OnInit } from '@angular/core';
import { ExerciceI } from 'src/app/modeles/Types.js';

@Component({
  selector: 'app-exercice-kine',
  templateUrl: './exercice-kine.component.html',
  styleUrls: ['./exercice-kine.component.scss']
})
export class ExerciceKineComponent implements OnInit {
  avatar!:string;
  public exercices:ExerciceI[] = [
    {
      photo:'assets/iconeKineOpto/exercice1.png',
      titre:"Muscles profonds",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra facilisis congue. Duis sit amet leo sed turpis molestie interdum. Praesent feugiat in libero et laoreet.",
      horloge:'assets/iconeKineOpto/horloge.svg',
      materiel:'assets/iconeKineOpto/materiel.svg',
      
    },
    {
      photo:'assets/iconeKineOpto/exercice2.png',
      titre:"Étirements",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra facilisis congue. Duis sit amet leo sed turpis molestie interdum. Praesent feugiat in libero et laoreet.",
      horloge:'assets/iconeKineOpto/horloge.svg',
      materiel:'assets/iconeKineOpto/materiel.svg',
      
    },
    {
      photo:'assets/iconeKineOpto/exercice3.png',
      titre:"Grenouille",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra facilisis congue. Duis sit amet leo sed turpis molestie interdum. Praesent feugiat in libero et laoreet.",
      horloge:'assets/iconeKineOpto/horloge.svg',
      materiel:'assets/iconeKineOpto/materiel.svg',
    
    },
    {
      photo:'assets/iconeKineOpto/exercice4.png',
      titre:"Quotidien",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra facilisis congue. Duis sit amet leo sed turpis molestie interdum. Praesent feugiat in libero et laoreet.",
      horloge:'assets/iconeKineOpto/horloge.svg',
      materiel:'assets/iconeKineOpto/materiel.svg',
     
    },
    {
      photo:'assets/iconeKineOpto/exercice1.png',
      titre:"Muscles profonds",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra facilisis congue. Duis sit amet leo sed turpis molestie interdum. Praesent feugiat in libero et laoreet.",
      horloge:'assets/iconeKineOpto/horloge.svg',
      materiel:'assets/iconeKineOpto/materiel.svg',
      
    },
    {
      photo:'assets/iconeKineOpto/exercice2.png',
      titre:"Étirements",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra facilisis congue. Duis sit amet leo sed turpis molestie interdum. Praesent feugiat in libero et laoreet.",
      horloge:'assets/iconeKineOpto/horloge.svg',
      materiel:'assets/iconeKineOpto/materiel.svg',
      
    },
    {
      photo:'assets/iconeKineOpto/exercice3.png',
      titre:"Grenouille",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra facilisis congue. Duis sit amet leo sed turpis molestie interdum. Praesent feugiat in libero et laoreet.",
      horloge:'assets/iconeKineOpto/horloge.svg',
      materiel:'assets/iconeKineOpto/materiel.svg',
    
    },
    {
      photo:'assets/iconeKineOpto/exercice4.png',
      titre:"Quotidien",
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
