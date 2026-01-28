import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BottomI, NutritionI } from '../utils/modeles/Types';
import { SanityService } from 'src/app/partage/services/sanity.service';
import { FooterMenuComponent } from '../template/footer/footer.component';

@Component({selector: 'app-nutrition',
  templateUrl: './nutrition.component.html',
  styleUrls: ['./nutrition.component.scss'],
  imports: [RouterLink, CommonModule, FooterMenuComponent],
  standalone: true})
export class NutritionComponent implements OnInit {
  bottoms: BottomI[] = [];
  r:Router = inject(Router);
  sanity:SanityService = inject(SanityService);

  accueilNutrition!: NutritionI[];

  ngOnInit(): void {
    const activeUrl = this.r.url;
    this.bottoms.forEach(item => {
      item.active = activeUrl.startsWith(item.url);
    });
    // Pour voir le résultat dans la console
    // this.sanity.getAccueilNutrition().then((data) => console.log(this.accueilNutrition = data));
    // Pour exécuter la méthode - J'utilise sort() pour les trier suivant leur ID afin de gérer l'ordre d'affichage
    this.sanity.getAccueilNutrition().then((data) => {
      this.accueilNutrition = data.sort((a, b) => a.id - b.id);
    });

  }
}
