import { Component, OnInit, inject } from '@angular/core';
import { SharedModule } from '../../../partage/shared.module';
import { InfosService } from 'src/app/partage/services/infos.service';
import { ConnexionService } from 'src/app/partage/services/connexion.service';
import { CommonModule } from '@angular/common';
import { DonneesService } from '../../partage/services/donnees.service';

@Component({
  selector: 'app-cheri',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
  standalone: true,
  providers: [InfosService, ConnexionService],
  imports: [CommonModule, SharedModule]
})
export class ProfilComponent implements OnInit {

  l: InfosService = inject(InfosService);
  get:DonneesService = inject(DonneesService);
  conn:ConnexionService = inject(ConnexionService);

  id: string | number = -1; // Index du chéri dans la liste des chéris de l'aidant
  edition: string = ''; // La chaîne indiquant si des données doivent être mises à jour

  ngOnInit(): void {
    this.conn.getAuthSession();
  }
  /**
   * Mettre à jour des données
   * @param ed La chaîne indiquant quel contenu mettre à jour
   */
  setEdition(ed: string) {
    ed ? this.edition == ed : this.edition = '';
  }
}
