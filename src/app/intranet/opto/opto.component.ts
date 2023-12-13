import { Component, OnInit } from '@angular/core';
import { AccueilI } from '../partage/modeles/Types';
import { DonneesService } from '../partage/services/donnees.service';

@Component({
  selector: 'app-opto',
  templateUrl: './opto.component.html',
  styleUrls: ['./opto.component.scss']
})
export class OptoComponent implements OnInit {

  accueilOpto!: AccueilI[];
  constructor(public get:DonneesService) { }
  ngOnInit(): void {
    this.get.getAccueil('opto');
  }

}
