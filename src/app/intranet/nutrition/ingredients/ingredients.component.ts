import { Component, OnInit } from '@angular/core';
import { CiqualI, MesPlatsI } from '../../utils/modeles/Types';
import { IngredientsServiceService } from './services/ingredients-service.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {

  filtre:string = ''; //Ce qui va servir à filtrer le tableau des ingrédients - utiliser dans ngModel
  debut:number = 1; //Le début de l'index - utiliser en HTML pour ajouter un chiffre à chaque élément du tableau
  
  alimCodeFiltre:number = 0; //La valeur par défaut qui sera modifié dynamiquement dans la méthode onSelect()
  
  selectedIngredient?:CiqualI; //Je récupére dans la variable mon interface CiqualI déclaré dans Types.ts
  selectedPlat?:MesPlatsI;
    
  constructor(public composition:IngredientsServiceService) { } // Injection du service

  ngOnInit(): any {
    //Lancer la récupération de la table ciqual
    //Je récupére la méthode getCiqual() de ingredients-service.services
   this.composition.getCiqual(); 
   this.composition.getMesPlats();  
  }

  //Méthode onSelect pour afficher les informations de l'aliment sur lequel j'ai cliqué - le paramétre aliment et de type CiqualI (interface)
  //J'utilise cette méthode dans le HTML avec (click) afin de l'utiliser uniquement sur l'élément cliquer
  onSelect(aliment:CiqualI): void {
    //Ci-dessous j'attribue à la variable selectedIngredient (ligne 17) l'interface CiqualI et tout ce qu'elle contient
    this.selectedIngredient = aliment;    
    console.log("La méthode onSelect, j'ai cliqué sur : " + aliment.alim_nom_fr);
    //Ci-dessous j'attribue à la variable alimCodeFiltre (ligne 15) l'alim_code de l'interface CiqualI
    //alimCodeFiltre contient maintenant l'alim_code de l'ingrédient sur lequel j'ai cliqué
    //Je m'en sers de valeur sur le filtre appliqué au pipe plats
    this.alimCodeFiltre = aliment.alim_code;
    console.log("Je veux ce code : " + this.alimCodeFiltre);    
  } 
  
}

