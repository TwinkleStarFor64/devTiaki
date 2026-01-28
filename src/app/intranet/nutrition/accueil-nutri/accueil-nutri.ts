import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NgStyle } from '@angular/common';
import { DonneesService } from '../../utils/services/donnees.service';

@Component({
  selector: 'app-accueil-nutri',
  imports: [RouterOutlet, RouterLink, NgStyle ],
  standalone: true,
  templateUrl: './accueil-nutri.html',
  styleUrl: './accueil-nutri.scss',
})
export class AccueilNutri {
  d:DonneesService = inject(DonneesService);
  router:Router = inject(Router);

  ngOnInit(): void {

  }
}
