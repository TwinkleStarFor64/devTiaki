import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  /** Renvoyer une chaîne de caractère d'un  */
  stringfy(obj:any):string{
    if(! Array.isArray(obj) && !obj.length) {
      return Object.values(obj).toString().toLowerCase();
    }
    return '';
  }
}
