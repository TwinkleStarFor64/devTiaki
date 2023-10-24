import { Pipe, PipeTransform } from '@angular/core';
import { ExerciceI } from '../../partage/modeles/Types';

@Pipe({
  name: 'filter'
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
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {
  transform(date:string): string {
    if (!date) {
      return ''; // Retourne tous les exercices si le filtre est vide
    }
    const dateParts = date.split('-');
    const year = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]);
    const day = parseInt(dateParts[2]);
    const newDate = new Date(year, month - 1, day);

    return newDate.toLocaleDateString('fr');
  }
}
