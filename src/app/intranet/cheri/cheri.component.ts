import { Component, OnInit, inject } from '@angular/core';
import { SharedModule } from '../../partage/shared.module';
import { InfosService } from 'src/app/partage/services/infos.service';
import { CheriI } from '../partage/modeles/Types';
import { ActivatedRoute } from '@angular/router';
import { DonneesService } from '../partage/services/donnees.service';

@Component({
  selector: 'app-cheri',
  templateUrl: './cheri.component.html',
  styleUrls: ['./cheri.component.scss'],
  standalone:true,
  providers:[DonneesService, InfosService],
  imports: [SharedModule]
})
export class CheriComponent implements OnInit{

  get:DonneesService = inject(DonneesService);
  l:InfosService = inject(InfosService);
  route:ActivatedRoute = inject(ActivatedRoute);

  cheri:CheriI = {id:-1, idCheri:-1, nom:"", prenom:"", roles:[]};
  id:string | number = -1;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

  }
}
