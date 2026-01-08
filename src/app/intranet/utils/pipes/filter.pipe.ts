import { Pipe, PipeTransform } from '@angular/core';
import { ExerciceI } from '../../modeles/Types';

@Pipe({
    name: 'filter',
    standalone: false
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
