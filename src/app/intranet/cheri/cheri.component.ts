import { Component, OnInit, inject } from '@angular/core';
import { SharedModule } from '../../partage/shared.module';
import { InfosService } from 'src/app/partage/services/infos.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { CheriService } from './cheri.service';
import { ConnexionService } from 'src/app/partage/services/connexion.service';
import { CommonModule } from '@angular/common';
import { CheriI } from 'src/app/partage/modeles/Types';
import { DonneesService } from '../partage/services/donnees.service';

@Component({
  selector: 'app-cheri',
  templateUrl: './cheri.component.html',
  styleUrls: ['./cheri.component.scss'],
  standalone: true,
  providers: [CheriService, InfosService, DonneesService],
  imports: [CommonModule, SharedModule]
})
export class CheriComponent implements OnInit {

  l: InfosService = inject(InfosService);
  serv: CheriService = inject(CheriService);
  get:DonneesService = inject(DonneesService);
  route: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);

  cheri!: CheriI; // Le chéri sélectionné depuis l'index dans la route

  id: string | number = -1; // Index du chéri dans la liste des chéris de l'aidant
  edition: string = ''; // La chaîne indiquant si des données doivent être mises à jour

  ngOnInit(): void {
    this.setCheri(this.route.snapshot.params['id']);
    console.log(this.cheri, this.get.profil);
    // Ecouteur pour le cas ou on changerait de route en passant d'un chéri à l'autre
    this.router.events.subscribe({
      next: (r) => {
        if (r instanceof NavigationEnd) {
          this.setCheri(this.route.snapshot.params['id']);
          console.log("Changement d'Id détecté", this.id)
        }
      },
      error: er => console.log(er),
      complete: () => console.log("Chéri attribué")
    });
  }
  /**
   * Etablir un chéri
   * @param index {number} Index du chéri récupéré de la route (correspond au chéri suivi par l'aidant)
   */
  setCheri(index: number) {
    this.id = index;
    this.cheri = this.get.profil.cheris[this.id];
    this.serv.getInfosCheri();
  }
  /**
   * Mettre à jour des données
   * @param ed La chaîne indiquant quel contenu mettre à jour
   */
  setEdition(ed: string) {
    ed ? this.edition == ed : this.edition = '';
  }
}
