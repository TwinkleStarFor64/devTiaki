import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  /** Renvoyer une chaîne de caractère d'un  */
  stringfy(obj: any): string {
    if (!Array.isArray(obj) && !obj.length) {
      return Object.values(obj).toString().toLowerCase();
    }
    return '';
  }
  /**
   * Traiter les données pour écraser les 'enfants'
   * @param data {any} Des données à traiter pour enlever les enfants et renvoyer les objets sans le paramètre 'enfant'
   * @param key {string} Clé à récupérer pour écraser l'objet
   */
  flatChilds(data: Array<any>, key: any): Array<any>{
    data.forEach(d => {
      for (let k in d) {
        if (Array.isArray(d[k])) {
          d[k] = this.flatEnfants(d[k], key);
        }
      }
    });
    return data;
  }
  /** Traiter un tableau avec une clé à écraser
   * @param data {Array<any>} Un tableau à écraser
   * @param key {string} Une clés, généralement issue de la requête, à écraser dans le tableau
   */
  flatEnfants(data: Array<any>, key: string) {
    return data.map(d => { if(d.hasOwnProperty(key)) return d = d[key] });
  }
}
