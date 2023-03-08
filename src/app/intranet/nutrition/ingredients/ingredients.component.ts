import { Component, OnInit } from '@angular/core';
import { CiqualI, MesPlatsI } from '../../utils/modeles/Types';
import { IngredientsServiceService } from './services/ingredients-service.service';
import { PlatsPipe } from '../../utils/pipes/plats.pipe';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {

  filtre:string = ''; //Ce qui va servir à filtrer le tableau des ingrédients - utiliser dans ngModel
  ecart:number = 8; //L'écart de la pagination
  debut:number = 1; //Le début de la pagination
  
  toto:number= 13021;

  selectedIngredient?:CiqualI;
  selectedPlat?:MesPlatsI;
    
  constructor(public composition:IngredientsServiceService) { }

  ngOnInit(): any {
    //Lancer la récupération de la table ciqual
    //Je récupére la méthode getCiqual() de ingredients-service.services
   this.composition.getCiqual(); 
   this.composition.getMesPlats();  
  
  }

  onSelect(aliment:CiqualI): void {
    console.log(this.selectedIngredient = aliment);
    this.selectedIngredient = aliment;    
  }
  
}

