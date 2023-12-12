import { Pipe, PipeTransform } from '@angular/core';
import { CiqualI, PlatI } from '../modeles/Types';
import { NutritionService } from '../../nutrition/services/nutrition.service';

@Pipe({
  name: 'aliments' //Le nom de mon Pipe
})
export class AlimentsPipe implements PipeTransform {
  transform(values: Array<any>, filtre: string): Array<any> {
    //La value est un tableau - correspond à mon tableau Ciqual
    //Ci-dessous if pas de filtre ou longueur de filtre inférieur à 3 lettres je retourne le tableau comme par il est afficher par défaut
    if (!filtre || filtre.length < 3) return values;
    //Ci-dessous if pas de values ou values strictement égale à 0 je retourne encore le tableau comme afficher par défaut
    if (!values || values.length == 0) return [];

    //Retour des données filtrées, la fonction filter renvoie un tableau d'aliments trouvés
    return values.filter((ingredient) => ingredient.alim_nom_fr.toLowerCase().indexOf(filtre.toLowerCase()) > -1);
  }
}
/** Filtrer les ingrédients */
@Pipe({
  name: 'ingredient',
})
export class IngredientsPipe implements PipeTransform {
  transform(items: Array<CiqualI>, codeAlim: number): any {
    // codeAlim est un filtre de type number

    if (!items || codeAlim === undefined) {
      //Si pas de plats ou pas de numéro alim_code
      return items;
    }

    //Ci-dessous je filtre CiqualI - je récupére alim_code sur CiqualI et je le compare au filtre codeAlim
    return items.filter((item) => item.alim_code === codeAlim);
  }
}
/** Filtrer les plats */
@Pipe({
  name: 'plats'
})
export class PlatsPipe implements PipeTransform {
  constructor(public nutri:NutritionService) { } //Injection de IngredientsServiceService pour l'utiliser dans transform

  transform(plats: Array<PlatI>, codeAlim: string | number): any { // codeAlim est un filtre de type number

    if (!plats) { //Si pas de plats ou pas de numéro alim_code
      return [];
  }if (codeAlim === undefined) { //Si pas de plats ou pas de numéro alim_code
    return plats;
}
      //Ci-dessous je filtre MesPlatsI - je récupére alim_code sur MesPlatsI et je le compare au filtre codeAlim
      return plats.map(plat => plat.ingredients.filter( item => item.alim_code === codeAlim))
  }
}
