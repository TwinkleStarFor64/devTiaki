import { Component, OnInit, inject } from '@angular/core';
import { SharedModule } from '../../partage/shared.module';
import { InfosService } from 'src/app/partage/services/infos.service';
import { ActivatedRoute } from '@angular/router';
import { CheriService } from './cheri.service';

@Component({
  selector: 'app-cheri',
  templateUrl: './cheri.component.html',
  styleUrls: ['./cheri.component.scss'],
  standalone:true,
  providers:[CheriService, InfosService],
  imports: [SharedModule]
})
export class CheriComponent implements OnInit{

  get:CheriService = inject(CheriService);
  l:InfosService = inject(InfosService);
  route:ActivatedRoute = inject(ActivatedRoute);

  id:string | number = -1;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }
}
