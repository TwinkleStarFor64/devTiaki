import { Pipe, PipeTransform } from '@angular/core';
import { ExerciceI } from '../../modeles/Types';
import { CiqualI, MesPlatsI } from '../modeles/Types';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {
  transform(exercices: ExerciceI[], filtre: string): ExerciceI[] {
    if (!filtre) {
      return exercices; // Retourne tous les exercices si le filtre est vide
    }
    const filtreLowerCase = filtre.trim().toLowerCase();
    return exercices.filter(exercice =>
      exercice.title.toLowerCase().includes(filtreLowerCase)
    );
  }
}
@Pipe({
  name: 'aliments',
  standalone: true
})
export class AlimentsPipe implements PipeTransform {
  transform(values: Array<any>, filtre: string): Array<any> {
    if (!filtre || filtre.length < 3) return values;
    if (!values || values.length == 0) return [];

    return values.filter((ingredient) => {
      if (
        ingredient.alim_nom_fr.toLowerCase().indexOf(filtre.toLowerCase()) != -1
      )
        return ingredient;
    });
  }
}
@Pipe({
  name: 'ingredients',
  standalone: true
})
export class IngredientsPipe implements PipeTransform {
  transform(items: Array<CiqualI>, codeAlim: number): any {
    if (!items || codeAlim === undefined) {
      return items;
    }
    return items.filter((item) => item.alim_code === codeAlim);
  }
}
@Pipe({
  name: 'journal',
  standalone: true
})
export class JournalPipe implements PipeTransform {

  transform(values: Array<any>, filtre: string): Array<any> { //La value est un tableau
    if (!filtre || filtre.length < 3) return values;
    if (!values || values.length == 0) return [];
    return values.filter(
      journal => {
        if (journal.objet.toLowerCase().indexOf(filtre.toLowerCase()) != -1) return journal;
        //Ci-dessus
      }
    )
  }
}

@Pipe({
  name: 'plats',
  standalone: true
})
export class PlatsPipe implements PipeTransform {
  transform(items: Array<MesPlatsI>, codeAlim: number): any {
    if (!items || codeAlim === undefined) {
      return items;
    }
    return items.filter(item => item.alim_code === codeAlim);
  }
}
@Pipe({
  name: 'programmeOpto',
  standalone: true
})
export class OptoPipe implements PipeTransform {

  transform(values: Array<any>, filtre: string): Array<any> {
    if (!filtre || filtre.length < 2) return values;
    if (!values || values.length == 0) return [];
    return values.filter(
      programme => {
        if (programme.toLowerCase().indexOf(filtre.toLowerCase()) != -1) return programme;
      }
    )
  }

}
