import { Component, OnInit } from '@angular/core';
import { IngredientsServiceService } from './services/ingredients-service.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {

  filtre:string = ''; //Ce qui va servir à filtrer le tableau des ingrédients - utiliser dans ngModel
  ecart:number = 8; //L'écart de la pagination
  debut:number = 0; //Le début de la pagination

  constructor(public composition:IngredientsServiceService) { }

  ngOnInit(): void {
    //Lancer la récupération de la table ciqual
    this.composition.getCiqual();//Je récupére la méthode de ingredients-service.services
  }

  suitePagination(){
    this.debut += this.ecart;
  }

  retourPagination(){
    this.debut -= this.ecart;
  }

}
