import { Component, OnInit } from '@angular/core';
import { CiqualI, PlatI } from '../../partage/modeles/Types';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { NutritionService } from '../services/nutrition.service';
import { IngredientsPipe } from '../../partage/pipes/nutrition.pipe';

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

  selectedIngredient?: CiqualI; //Je récupére dans la variable mon interface CiqualI déclaré dans Types.ts
  selectedPlat?: PlatI;
  ingredients:Array<CiqualI> = [];

  currentPage = 0; // Page actuelle pour MatPaginator
  itemsPerPage = 20; // Nombre de pages à afficher pour MatPaginator
  itemsLength:number = 20;

  constructor(public nutri: NutritionService, private paginatorIntl: MatPaginatorIntl) {} // Injection du service

  ngOnInit(): any {
    // Ci-dessous je modifie les labels de MatPaginator en initialisant une nouvelle instance de la classe
    const myPaginatorIntl = new MyPaginatorIntl();
    this.paginatorIntl.itemsPerPageLabel = myPaginatorIntl.itemsPerPageLabel;
    this.paginatorIntl.nextPageLabel = myPaginatorIntl.nextPageLabel;
    this.paginatorIntl.previousPageLabel = myPaginatorIntl.previousPageLabel;
    this.paginatorIntl.firstPageLabel = myPaginatorIntl.firstPageLabel;
    this.paginatorIntl.lastPageLabel = myPaginatorIntl.lastPageLabel;
    this.paginatorIntl.getRangeLabel = myPaginatorIntl.getRangeLabel;

    this.onFilterChange();
  }
  /** Sélectionner un ingrédient
   * @param {CiqualI} aliment Ingrédient à afficher
   */
  selectIngredient(aliment: CiqualI): void {
    this.selectedIngredient = aliment;
  }
  onMesPlats(plat: PlatI): void {
    this.selectedPlat = plat;
  }

// Méthode utilisé dans l'input afin de réinitialiser [pageIndex] de paginator
// Si l'input et vide ou pas vide l'index est défini à 0 afin de retrouver l'affichage initial
  onFilterChange() {
    if (this.filtre === '' || this.filtre != '') { // Variable filtre utilisé dans ngModel de l'input
      this.currentPage = 0;
    }
    this.itemsLength = this.nutri.ciqual.slice((this.currentPage * this.itemsPerPage), (this.currentPage + 1) * this.itemsPerPage).length;
  }

// Méthode pour voir le comportement de mat-paginator - si j'utilise dans le html (page)="handlePageEvent($event)"
  handlePageEvent(event: PageEvent) {
    console.log(event.pageIndex);
    //this.currentPage = event.pageIndex;
  }

}
