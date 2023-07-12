import { Component, OnInit } from '@angular/core';
import { CiqualI, MesPlatsI } from '../../utils/modeles/Types';
import { IngredientsServiceService } from './services/ingredients-service.service';
import { MatPaginatorIntl } from '@angular/material/paginator';

// Je déclare la classe MyPaginatorIntl en dehors de la classe IngredientsComponent
class MyPaginatorIntl extends MatPaginatorIntl {
  override itemsPerPageLabel = 'Éléments par page :';
  override nextPageLabel = 'Page suivante';
  override previousPageLabel = 'Page précédente';
  override firstPageLabel = 'Première page';
  override lastPageLabel = 'Dernière page';
  // Ci-dessous je modifie juste le label 'of' par 'sur' la méthode de calcul est celle par défaut
  // Plus d'infos ici : https://stackoverflow.com/questions/54057030/how-to-change-itemsperpagelabel-in-mat-paginator-in-angular-6
  override getRangeLabel = (page: number, pageSize: number, length: number) => {
    if (length === 0 || pageSize === 0) {
      return `0 à ${length }`;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    // If the start index exceeds the list length, do not try and fix the end index to the end.
    const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
    return `${startIndex + 1} - ${endIndex} sur ${length}`;
  };  
}

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss'],
})
export class IngredientsComponent implements OnInit {
  filtre: string = ''; //Ce qui va servir à filtrer le tableau des ingrédients - utiliser dans ngModel
  debut: number = 1; //Le début de l'index - utiliser en HTML pour ajouter un chiffre à chaque élément du tableau
  alimCodeFiltre: number = 0; //La valeur par défaut qui sera modifié dynamiquement dans la méthode onSelect()

  selectedIngredient?: CiqualI; //Je récupére dans la variable mon interface CiqualI déclaré dans Types.ts
  selectedPlat?: MesPlatsI;

  currentPage = 0; // Page actuelle pour MatPaginator 
  itemsPerPage = 20;

  constructor(public composition: IngredientsServiceService, private paginatorIntl: MatPaginatorIntl) {} // Injection du service

  ngOnInit(): any {
    //Lancer la récupération de la table ciqual
    //Je récupére la méthode getCiqual() de ingredients-service.services
    this.composition.getCiqual();
    this.composition.getMesPlats();

    // Ci-dessous je modifie les labels de MatPaginator en initialisant une nouvelle instance de la classe
    const myPaginatorIntl = new MyPaginatorIntl();
    this.paginatorIntl.itemsPerPageLabel = myPaginatorIntl.itemsPerPageLabel;
    this.paginatorIntl.nextPageLabel = myPaginatorIntl.nextPageLabel;
    this.paginatorIntl.previousPageLabel = myPaginatorIntl.previousPageLabel;
    this.paginatorIntl.firstPageLabel = myPaginatorIntl.firstPageLabel;
    this.paginatorIntl.lastPageLabel = myPaginatorIntl.lastPageLabel;
    this.paginatorIntl.getRangeLabel = myPaginatorIntl.getRangeLabel;    
  }

  //Méthode onSelect pour afficher les informations de l'aliment sur lequel j'ai cliqué - le paramétre aliment et de type CiqualI (interface)
  //J'utilise cette méthode dans le HTML avec (click) afin de l'utiliser uniquement sur l'élément cliquer
  onSelect(aliment: CiqualI): void {
    //Ci-dessous j'attribue à la variable selectedIngredient (ligne 17) l'interface CiqualI et tout ce qu'elle contient
    this.selectedIngredient = aliment;
    console.log(
      "La méthode onSelect, j'ai cliqué sur : " + aliment.alim_nom_fr
    );
    //Ci-dessous j'attribue à la variable alimCodeFiltre (ligne 15) l'alim_code de l'interface CiqualI
    //alimCodeFiltre contient maintenant l'alim_code de l'ingrédient sur lequel j'ai cliqué
    //Je m'en sers de valeur sur le filtre appliqué au pipe plats
    this.alimCodeFiltre = aliment.alim_code;
    console.log('Je veux ce code : ' + this.alimCodeFiltre);
  }

  onMesPlats(plat: MesPlatsI): void {
    this.selectedPlat = plat;
  }
  
  
}
