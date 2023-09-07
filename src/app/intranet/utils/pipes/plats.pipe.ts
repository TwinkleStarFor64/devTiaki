import { Pipe, PipeTransform } from '@angular/core';
import { IngredientsServiceService } from '../../nutrition/ingredients/services/ingredients-service.service';
import { MesPlatsI } from '../modeles/Types';

@Pipe({
  name: 'plats'
})
export class PlatsPipe implements PipeTransform {
 

  transform(items: MesPlatsI[], codeAlim: number): any { // codeAlim est un filtre de type number
        
    if (!items || codeAlim === undefined) { //Si pas de plats ou pas de numéro alim_code
      return items;
  }   
      //Ci-dessous je filtre MesPlatsI - je récupére alim_code sur MesPlatsI et je le compare au filtre codeAlim  
      return items.filter( item => item.alim_code === codeAlim);   
  }  
}





//AVEC CE CODE JE FILTRE ALIM_CODE SUR LE TABLEAU DE PLATS.JSON
/* transform(items: any[], filter: number): any {
  if (!items || filter === undefined) {
    return items;
}  
return items.filter(item => item.alim_code === filter);     
} */



//PREMIÉRE VERSION DU TRANSFORM
//transform(items: MesPlatsI[], filter: number): any {
  // Utiliser le service pour récupérer le tableau des ingrédients ciqual 
  //const ingredients = this.composition.getCiqual();
  //Si pas de plats ou pas de numéro alim_code
  //if (!items || filter === undefined) { 
    //return items;
//}  
// Faire le filtrage en utilisant le tableau des ingrédients
// Si alim_code identique sur MesPlatsI et CiqualI et identique au nombre de filter
// Utilisation de la méthode SOME https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/some
//return items.filter(item => ingredients.some(i => i.alim_code === item.alim_code) && item.alim_code === filter);    
//}












/* const plat = filter.find(p => p.alim_code === alimCode);
    
if (!plat) {
  return values; 
}

const mesDonnees = values.filter(element => element.alim_code === plat.alim_code);

return mesDonnees; */



    /* const ciqual: CiqualI[] = []; // tableau 1
    const mesPlats: MesPlatsI[] = []; // tableau 2
    const commonIds = ciqual.filter(c => mesPlats.map(m => m.alim_code).includes(c.alim_code)); // récupération des objets qui ont une valeur commune

    return commonIds; */

/* values: Array<{ [key: number]: any }>, filter: Array<{ [key: number]: any }>, alimCode:number */


/* transform(values: Array<any>, alimCode:number): Array<any>  {
  const mesDonnees = this.composition.ciqual;
  if (!values) return [];
  if (!alimCode || alimCode < 0) return values;

  const filteredValues = values.filter(value => value.alimCode === alimCode);

  const matchingValues = filteredValues.map(value => {
    return mesDonnees.filter(mesDonnee => mesDonnee.alim_code === value.alim_code)[0];
  });
  return matchingValues;
} */


/* transform(values: Array<any>, filter: Array<any>, alimCode:string): Array<any>  {
    
  if (!values || !filter) {
    return values;
  }

  return values.filter(item => filter.findIndex(f => f[0] === item[alimCode]) !== -1);
}
} */