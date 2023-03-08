import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CiqualI } from 'src/app/intranet/utils/modeles/Types';
import { MesPlatsI } from 'src/app/intranet/utils/modeles/Types';

@Injectable({
  providedIn: 'root'
})
export class IngredientsServiceService {

  ciqual:CiqualI[] = []; //Je déclare ici un tableau
  plat: MesPlatsI[] = [];
  constructor(private http:HttpClient) { }  
  
  getCiqual(){
    //Après le get je déclare un tableau comme pour la variable ligne 10
    this.http.get<CiqualI[]>('assets/data/ciqual.json').subscribe( //Je récupére mon tableau Json et j'y subscribe
      {
        next:r => this.ciqual = r,
        error:er => console.log(er),
        complete:() => console.log(this.ciqual)
      }
      
    );
  }

    getMesPlats(): Observable<MesPlatsI[]> {
      return this.http.get<MesPlatsI[]>('assets/data/plats.json');
    };
  
    // Ajoutez cette méthode pour récupérer les alim_codes du tableau ciqual
    getAlimCodes(): ({ alim_code: any } & CiqualI)[] {
      return this.ciqual.map(({ alim_code, ...rest }) => ({ alim_code, ...rest }));
    }
    
  }  


