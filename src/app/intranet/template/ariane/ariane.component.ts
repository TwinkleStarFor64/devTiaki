import { Component } from '@angular/core';
import { InfosService } from 'src/app/partage/services/infos.service';

@Component({
  selector: 'app-ariane',
  templateUrl: './ariane.component.html',
  styleUrls: ['./ariane.component.scss']
})
export class ArianeComponent {
  classe:string = '';

  constructor(public l:InfosService){}

}
