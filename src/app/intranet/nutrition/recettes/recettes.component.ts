import { Component, OnInit } from '@angular/core';
import { ExerciceI } from '../../modeles/Types';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.component.html',
  styleUrls: ['./recettes.component.scss']
})
export class RecettesComponent implements OnInit {

  public exercices:ExerciceI[] = [
    {
      photo:'assets/imageOpto/exerciceOpto1.png',
      titre:"Muscles profonds",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra facilisis congue. Duis sit amet leo sed turpis molestie interdum. Praesent feugiat in libero et laoreet.",
      horloge:'assets/iconeKineOpto/horlogeOpto.svg',
      materiel:'assets/iconeKineOpto/materielOpto.svg',
      
    },
    {
      photo:'assets/imageOpto/exerciceOpto2.png',
      titre:"Étirements",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra facilisis congue. Duis sit amet leo sed turpis molestie interdum. Praesent feugiat in libero et laoreet.",
      horloge:'assets/iconeKineOpto/horlogeOpto.svg',
      materiel:'assets/iconeKineOpto/materielOpto.svg',
      
    },
    {
      photo:'assets/imageOpto/exerciceOpto3.png',
      titre:"Grenouille",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra facilisis congue. Duis sit amet leo sed turpis molestie interdum. Praesent feugiat in libero et laoreet.",
      horloge:'assets/iconeKineOpto/horlogeOpto.svg',
      materiel:'assets/iconeKineOpto/materielOpto.svg',
    
    },
    {
      photo:'assets/imageOpto/exerciceOpto4.png',
      titre:"Quotidien",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra facilisis congue. Duis sit amet leo sed turpis molestie interdum. Praesent feugiat in libero et laoreet.",
      horloge:'assets/iconeKineOpto/horlogeOpto.svg',
      materiel:'assets/iconeKineOpto/materielOpto.svg',
     
    },
    {
      photo:'assets/imageOpto/exerciceOpto5.png',
      titre:"Muscles profonds",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra facilisis congue. Duis sit amet leo sed turpis molestie interdum. Praesent feugiat in libero et laoreet.",
      horloge:'assets/iconeKineOpto/horlogeOpto.svg',
      materiel:'assets/iconeKineOpto/materielOpto.svg',
      
    },
    {
      photo:'assets/imageOpto/exerciceOpto1.png',
      titre:"Étirements",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra facilisis congue. Duis sit amet leo sed turpis molestie interdum. Praesent feugiat in libero et laoreet.",
      horloge:'assets/iconeKineOpto/horlogeOpto.svg',
      materiel:'assets/iconeKineOpto/materielOpto.svg',
      
    },
    {
      photo:'assets/imageOpto/exerciceOpto2.png',
      titre:"Grenouille",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra facilisis congue. Duis sit amet leo sed turpis molestie interdum. Praesent feugiat in libero et laoreet.",
      horloge:'assets/iconeKineOpto/horlogeOpto.svg',
      materiel:'assets/iconeKineOpto/materielOpto.svg',
    
    },
    {
      photo:'assets/imageOpto/exerciceOpto3.png',
      titre:"Quotidien",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra facilisis congue. Duis sit amet leo sed turpis molestie interdum. Praesent feugiat in libero et laoreet.",
      horloge:'assets/iconeKineOpto/horlogeOpto.svg',
      materiel:'assets/iconeKineOpto/materielOpto.svg',
     
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
