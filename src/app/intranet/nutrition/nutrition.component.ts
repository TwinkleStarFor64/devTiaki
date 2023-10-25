import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BottomI, NutritionI } from '../partage/modeles/Types';
import { SanityService } from 'src/app/partage/services/sanity.service';

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.component.html',
  styleUrls: ['./nutrition.component.scss']
})
export class NutritionComponent implements OnInit {

  public bottoms:BottomI[] = [];

  accueilNutrition!: NutritionI[];


  constructor( private router: Router, public sanity: SanityService) { }

  ngOnInit(): void {
    const activeUrl = this.router.url;
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

  onNavItemClick(bottom:BottomI) {
    this.bottoms.forEach(item => item.active = false);
    bottom.active = true;
  }
}
