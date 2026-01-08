import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../../partage/services/connexion.service';
import { SupabaseService } from 'src/app/partage/services/supabase.service';

@Component({
    selector: 'app-connexion',
    templateUrl: './connexion.component.html',
    styleUrls: ['./connexion.component.scss'],
    standalone: false
})
export class ConnexionComponent implements OnInit {
  titre:string="Se connecter";

  constructor(public conn: ConnexionService, public supa:SupabaseService) { }


  async ngOnInit(): Promise<void> {
    const { data, error } = await this.supa.getAidant();
    console.log(data);
    //const { data, error } = await this.supa.getHistoriqueJournal();
    //console.log(data);
  }

   // Méthode pour afficher l'états des données
  dataObject(){
    console.log(this.conn.connexion);
  }

}
