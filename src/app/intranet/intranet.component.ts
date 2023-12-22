import { Component } from '@angular/core';
import { UtilsService } from '../partage/services/utils.service';
import { InfosService } from '../partage/services/infos.service';
import { ConnexionService } from '../partage/services/connexion.service';

@Component({
  selector: 'app-intranet',
  templateUrl: './intranet.component.html',
  styleUrls: ['./intranet.component.scss'],
})
export class IntranetComponent {
  constructor(private l:InfosService, private utils:UtilsService, private conn:ConnexionService){
    if(! this.l.t) this.l.getTraductions();
  }
}
