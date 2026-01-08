import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {
  connexion:any = {
    id:{
      value:'',
      placeholder:'Renseignez vôtre identifiant'
    },
    mdp:{
      value:'',
      placeholder:'Mot de passe'
    }
  }
}
