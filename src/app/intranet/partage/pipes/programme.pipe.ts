import { Pipe, PipeTransform } from '@angular/core';
import { ExerciceI } from '../modeles/Types';
import { UtilsService } from '../../../partage/services/utils.service';

@Pipe({
  name: 'programme'
})
export class ProgrammeOptoPipe implements PipeTransform {

  transform(values: Array<any>, filtre: string): Array<any> {
    // Ci-dessous if pas de filtre ou longueur de filtre inférieur à 3 lettres je retourne le tableau comme par il est afficher par défaut
    if (!filtre || filtre.length < 2) return values;
    // Ci-dessous if pas de values ou values strictement égale à 0 je retourne encore le tableau comme afficher par défaut
    if (!values || values.length == 0) return [];
    // Retour des données filtrées, la fonction filter renvoie un tableau de programme trouvés
    return values.filter(
      programme => {
        if (programme.toLowerCase().indexOf(filtre.toLowerCase()) != -1) return programme;
      }
    )
  }

}

@Pipe({
  name: 'exercices'
})
export class ExercicesPipe implements PipeTransform {
  constructor(private utils: UtilsService) { }
  transform(exos: Array<ExerciceI>, choix:Array<string>, fait?: boolean, allergies?: boolean): Array<any> {
    // choix = choix.toLocaleLowerCase();
    // Ci-dessous if pas de values ou values strictement égale à 0 je retourne encore le tableau comme afficher par défaut
    if (!exos || exos.length == 0) return [];
    const exercices = exos.filter(exo => {
      const e = this.utils.stringfy(exo);
      for(let c of choix){
        if(e.indexOf(c) !== -1) {
          return exo;
        };
      }
    });
    return exercices.length > 0 ? exercices : exos;
  }

}
