import { Component, OnInit } from '@angular/core';
import { DonneesService } from '../partage/services/donnees.service';

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.component.html',
  styleUrls: ['./nutrition.component.scss']
})
export class NutritionComponent implements OnInit {

  constructor( public get:DonneesService) { }

  ngOnInit(): void {
    this.get.getAccueil('nutrition');
  }
}
