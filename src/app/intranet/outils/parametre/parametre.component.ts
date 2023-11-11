import { Component } from '@angular/core';
import { InfosService } from 'src/app/partage/services/infos.service';
import { DonneesService } from '../../partage/services/donnees.service';
import { ParamI, ParamsI } from '../../partage/modeles/Types';

@Component({
  selector: 'app-parametre',
  templateUrl: './parametre.component.html',
  styleUrls: ['./parametre.component.scss'],
})
export class ParametreComponent {

  params:ParamsI = {app:[]};
  param!:ParamI;

  constructor(public l:InfosService, private get:DonneesService){
    this.get.getJsonData('params').subscribe({
      next: p => {
        this.params = p;
        this.param = this.params.app[0];
      },
      error: er => console.log(er),
      complete: () => console.log("Paramètres chargés")
    })
  }
  /** Indiquer sur quel paramètre nous travaillons actuellement */
  setParam(p:any){
    this.param = p;
  }

}
