import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../../partage/services/connexion.service';
import { DonneesService } from 'src/app/intranet/partage/services/donnees.service';
import { InfosService } from 'src/app/partage/services/infos.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent {
  titre:string="Se connecter";

  id:string = '';

  constructor(public conn: ConnexionService, public l:InfosService) { }

  showConnexion(){
    console.log(this.conn.connexion, this.id);
  }

}
