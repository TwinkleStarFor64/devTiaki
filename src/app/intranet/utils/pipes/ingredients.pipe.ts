import { Pipe, PipeTransform } from '@angular/core';
import { CiqualI } from '../modeles/Types';

@Pipe({
    name: 'ingredients',
    standalone: false
})
export class IngredientsPipe implements PipeTransform {
  transform(items: CiqualI[], codeAlim: number): any {
    // codeAlim est un filtre de type number

    if (!items || codeAlim === undefined) {
      //Si pas de plats ou pas de numéro alim_code
      return items;
    }

    //Ci-dessous je filtre CiqualI - je récupére alim_code sur CiqualI et je le compare au filtre codeAlim
    return items.filter((item) => item.alim_code === codeAlim);    
  }
}
