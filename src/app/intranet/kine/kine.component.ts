import { Component, OnInit } from '@angular/core';
import { KineService } from './services/kine.service';
import { DonneesService } from '../partage/services/donnees.service';

@Component({
  selector: 'app-kine',
  templateUrl: './kine.component.html',
  styleUrls: ['./kine.component.scss'],
})
export class KineComponent implements OnInit {

  constructor(public kine:KineService, public get:DonneesService) { }

  ngOnInit(): void {
    this.get.getAccueil('kine');
  }

}
