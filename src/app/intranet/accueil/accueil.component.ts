import { Component, OnInit } from '@angular/core';
import { AccueilI } from '../partage/modeles/Types';
import { DonneesService } from '../partage/services/donnees.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
})
export class AccueilComponent implements OnInit {

  imageAccueil!: AccueilI[];

  constructor(public get: DonneesService) { }

  ngOnInit(): void {
    this.get.getAccueil('intranet');
  }
}
