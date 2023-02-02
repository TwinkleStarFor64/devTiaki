import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../utils/services/connexion.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  titre:string="Se connecter";

  constructor(public conn: ConnexionService) { }

  ngOnInit(): void {
  } 
   // Méthode pour afficher l'états des données
  dataObject(){
    console.log(this.conn.connexion);
  }   
}
