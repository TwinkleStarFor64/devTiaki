import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'journal',
    standalone: false
})
export class JournalPipe implements PipeTransform {

  transform(values: Array<any>, filtre:string): Array<any> { //La value est un tableau
    //Ci-dessous if pas de filtre ou longueur de filtre inférieur à 3 lettres je retourne le tableau comme par il est afficher par défaut
        if(!filtre || filtre.length < 3) return values;
    //Ci-dessous if pas de values ou values strictement égale à 0 je retourne encore le tableau comme afficher par défaut
        if(!values || values.length == 0) return [];
    //Retour des données filtrées, la fonction filter renvoie un tableau d'aliments trouvés    
        return values.filter(
          journal => {
            if(journal.objet.toLowerCase().indexOf(filtre.toLowerCase()) !=-1) return journal;
    //Ci-dessus
          }
        )
      }

}
