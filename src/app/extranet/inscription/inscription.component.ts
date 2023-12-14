import { Component } from '@angular/core';
import { ConnexionService } from 'src/app/partage/services/connexion.service';
import { InfosService } from 'src/app/partage/services/infos.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent {

  id:string = '';

  constructor(public conn: ConnexionService, public l:InfosService) { }
  /** Créer un compte utilisateur */
  creeCompte(){

  }
  /** Mettre à jour les données du profil */
  updateProfil(){

  }
}
