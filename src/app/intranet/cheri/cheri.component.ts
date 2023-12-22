import { Component, OnInit, inject } from '@angular/core';
import { SharedModule } from '../../partage/shared.module';
import { InfosService } from 'src/app/partage/services/infos.service';
import { ActivatedRoute } from '@angular/router';
import { CheriService } from './cheri.service';
import { ConnexionService } from 'src/app/partage/services/connexion.service';
import { CheriI } from '../partage/modeles/Types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cheri',
  templateUrl: './cheri.component.html',
  styleUrls: ['./cheri.component.scss'],
  standalone:true,
  providers:[CheriService, InfosService],
  imports: [CommonModule, SharedModule]
})
export class CheriComponent implements OnInit{

  get:CheriService = inject(CheriService);
  conn:ConnexionService = inject(ConnexionService);
  l:InfosService = inject(InfosService);
  route:ActivatedRoute = inject(ActivatedRoute);

  cheri!:CheriI;

  id:string | number = -1;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.cheri = this.conn.user.cheris[this.id];
    console.log(this.cheri, this.conn.user);
  }
}
