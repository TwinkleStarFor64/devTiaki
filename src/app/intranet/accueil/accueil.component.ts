import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Component, OnInit } from '@angular/core';
import { SanityService } from 'src/app/partage/services/sanity.service';
import { AccueilI } from '../modeles/Types';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
  standalone: true,
  imports: [RouterLink, CommonModule],
  
})
export class AccueilComponent implements OnInit {

  imageAccueil!: AccueilI[];

  constructor(public sanity: SanityService) {}

  ngOnInit(): void {
    this.sanity.getAccueil().then((data) => {
      this.imageAccueil = data.sort((a, b) => a.id - b.id);
    });
  }
}
