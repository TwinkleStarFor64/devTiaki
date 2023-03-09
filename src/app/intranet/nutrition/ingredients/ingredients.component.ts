import { Component, OnInit } from '@angular/core';
import { CiqualI } from '../../utils/modeles/Types';
import { IngredientsServiceService } from './services/ingredients-service.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {

  filtre:string = ''; //Ce qui va servir à filtrer le tableau des ingrédients - utiliser dans ngModel
  ecart:number = 8; //L'écart de la pagination
  debut:number = 1; //Le début de la pagination
  
  selectedIngredient?:CiqualI;
    
  constructor(public composition:IngredientsServiceService) { }

  ngOnInit(): any {
    //Lancer la récupération de la table ciqual
    //Je récupére la méthode getCiqual() de ingredients-service.services
   this.composition.getCiqual();  
  }

  onSelect(aliment:CiqualI): void {
    console.log(this.selectedIngredient = aliment);
    this.selectedIngredient = aliment;   
  }
    
}

