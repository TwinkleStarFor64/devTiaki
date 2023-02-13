import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IngredientsServiceService {

  ciqual:Array<any> = []; //Je déclare ici un tableau

  constructor(private http:HttpClient) { }
  
  
  getCiqual(){
    //Après le get je déclare un tableau comme pour la variable ligne 9
    this.http.get<Array<any>>('assets/data/ciqual.json').subscribe( //Je récupére mon tableau Json et j'y subscribe
      {
        next:r => this.ciqual = r,
        error:er => console.log(er),
        complete:() => console.log('Requête ciqual ok !')
      }
    );
  }

  
}
