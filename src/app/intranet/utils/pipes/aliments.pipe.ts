import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'aliments', //Le nom de mon Pipe
})

export class AlimentsPipe implements PipeTransform {
  transform(values: Array<any>, filtre: string): Array<any> {
    //La value est un tableau - correspond à mon tableau Ciqual
    //Ci-dessous if pas de filtre ou longueur de filtre inférieur à 3 lettres je retourne le tableau comme par il est afficher par défaut
    if (!filtre || filtre.length < 3) return values;
    //Ci-dessous if pas de values ou values strictement égale à 0 je retourne encore le tableau comme afficher par défaut
    if (!values || values.length == 0) return [];
    //Retour des données filtrées, la fonction filter renvoie un tableau d'aliments trouvés
    return values.filter((ingredient) => {
      if (
        ingredient.alim_nom_fr.toLowerCase().indexOf(filtre.toLowerCase()) != -1
      )
        return ingredient;
        //Ci-dessus j'utilise != -1 afin de vérifier qu'au moins un élément correspond au filtre
    });
  }  
}





  // Version avec slice() - Inutile 

  /* transform(values: Array<any>, filtre: string, currentPage: number, itemsPerPage: number): Array<any> {
    //La value est un tableau - correspond à mon tableau Ciqual
    //Ci-dessous if pas de filtre ou longueur de filtre inférieur à 3 lettres je retourne le tableau comme par il est afficher par défaut
    if (!filtre || filtre.length < 3) return values;
    //Ci-dessous if pas de values ou values strictement égale à 0 je retourne encore le tableau comme afficher par défaut
    if (!values || values.length == 0) return [];

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    //Retour des données filtrées, la fonction filter renvoie un tableau d'aliments trouvés
    return values.filter((ingredient) => {
      if (
        ingredient.alim_nom_fr.toLowerCase().indexOf(filtre.toLowerCase()) != -1
      )
        return ingredient;
    // slice() pour la pagination sur ingrédients  
    }).slice(startIndex, endIndex);
  } */