import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {
  connecte:boolean = true; // Valider l'état de la connexion de l'utilisateur
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
