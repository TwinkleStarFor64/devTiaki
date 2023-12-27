import { Component, OnInit, inject } from '@angular/core';
import { SharedModule } from '../../partage/shared.module';
import { InfosService } from 'src/app/partage/services/infos.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { CheriService } from './cheri.service';
import { ConnexionService } from 'src/app/partage/services/connexion.service';
import { CheriI } from '../partage/modeles/Types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cheri',
  templateUrl: './cheri.component.html',
  styleUrls: ['./cheri.component.scss'],
  standalone: true,
  providers: [CheriService, InfosService],
  imports: [CommonModule, SharedModule]
})
export class CheriComponent implements OnInit {

  l: InfosService = inject(InfosService);
  get: CheriService = inject(CheriService);
  conn: ConnexionService = inject(ConnexionService);
  route: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);

  cheri!: CheriI;

  id: string | number = -1;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.cheri = this.conn.user.cheris[this.id];
    console.log(this.cheri, this.conn.user);
    // Ecouteur pour le cas ou on changerait de route en passant d'un chéri à l'autre
    this.router.events.subscribe({
      next: (r) => {
        if (r instanceof NavigationEnd) {
          this.id = this.route.snapshot.params['id'];
          this.cheri = this.conn.user.cheris[this.id];
          console.log("Changement d'Id détecté", this.id)
        }
      },
      error: er => console.log(er),
      complete: () => { }
    });
  }
}
