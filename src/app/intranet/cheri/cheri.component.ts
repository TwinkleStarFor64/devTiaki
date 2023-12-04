import { Component, OnInit, inject } from '@angular/core';
import { CheriService } from '../partage/services/cheri.service';
import { SharedModule } from '../partage/shared.module';
import { InfosService } from 'src/app/partage/services/infos.service';
import { ProfilI } from '../partage/modeles/Types';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cheri',
  templateUrl: './cheri.component.html',
  styleUrls: ['./cheri.component.scss'],
  standalone:true,
  providers:[CheriService, InfosService],
  imports: [SharedModule]
})
export class CheriComponent implements OnInit{

  cheri:CheriService = inject(CheriService);
  l:InfosService = inject(InfosService);
  route:ActivatedRoute = inject(ActivatedRoute);

  profil:ProfilI = <ProfilI>{};
  id:string | number = -1;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getProfil();
  }
  /** Récupérer le profil de la personne suivie en fonction du paramètre passé dans l'URL */
  getProfil(){

  }
}
