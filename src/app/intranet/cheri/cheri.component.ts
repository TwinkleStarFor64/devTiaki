import { Component, OnInit, inject } from '@angular/core';
import { CheriService } from '../partage/services/cheri.service';
import { SharedModule } from '../partage/shared.module';
import { InfosService } from 'src/app/partage/services/infos.service';
import { CheriI } from '../partage/modeles/Types';
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

  service:CheriService = inject(CheriService);
  l:InfosService = inject(InfosService);
  route:ActivatedRoute = inject(ActivatedRoute);

  cheri!:CheriI;
  id:string | number = -1;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

  }
}
