import { Component } from '@angular/core';
import { UtilsService } from './partage/services/utils.service';
import { InfosService } from '../partage/services/infos.service';

@Component({
  selector: 'app-intranet',
  templateUrl: './intranet.component.html',
  styleUrls: ['./intranet.component.scss'],
})
export class IntranetComponent {
  constructor(private l:InfosService){
    if(! this.l.t) this.l.getTraductions();
  }
}
