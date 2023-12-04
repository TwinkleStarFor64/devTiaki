import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../../partage/services/connexion.service';
import { DonneesService } from 'src/app/intranet/partage/services/donnees.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  titre:string="Se connecter";

  constructor(public conn: ConnexionService, private get:DonneesService) { }


  async ngOnInit(): Promise<void> {
    const { data, error } = await this.get.getAidant();
    console.log(data);
    //const { data, error } = await this.supa.getHistoriqueJournal();
    //console.log(data);
  }

   // Méthode pour afficher l'états des données
  dataObject(){
    console.log(this.conn.connexion);
  }

}
