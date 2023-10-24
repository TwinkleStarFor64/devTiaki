import { Pipe, PipeTransform } from '@angular/core';
import { IngredientsServiceService } from '../../nutrition/ingredients/services/ingredients-service.service';
import { MesPlatsI } from '../modeles/Types';

@Pipe({
  name: 'plats'
})
export class PlatsPipe implements PipeTransform {
  constructor(public composition:IngredientsServiceService) { } //Injection de IngredientsServiceService pour l'utiliser dans transform

  transform(items: MesPlatsI[], codeAlim: number): any { // codeAlim est un filtre de type number

    if (!items || codeAlim === undefined) { //Si pas de plats ou pas de numéro alim_code
      return items;
  }
      //Ci-dessous je filtre MesPlatsI - je récupére alim_code sur MesPlatsI et je le compare au filtre codeAlim
      return items.filter( item => item.alim_code === codeAlim);
  }
}
