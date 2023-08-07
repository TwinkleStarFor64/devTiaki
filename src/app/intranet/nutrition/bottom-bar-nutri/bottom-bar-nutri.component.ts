import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BottomI } from 'src/app/intranet/modeles/Types';

@Component({
  selector: 'app-bottom-bar-nutri',
  templateUrl: './bottom-bar-nutri.component.html',
  styleUrls: ['./bottom-bar-nutri.component.scss'],
})
export class BottomBarNutriComponent implements OnInit {
  public bottoms: BottomI[] = [
    {
      image: 'assets/iconeBottom/journalBottom.png',
      titre: 'Journal',
      info: 'Naviguer dans votre historique alimentaire',
      lien: 'Journal',
      url: '/intranet/nutrition/journal-Repas',
      active: false,
    },
    {
      image: 'assets/iconeBottom/journalBottom.png',
      titre: 'Menus',
      info: 'Les listes de vos menus et de ceux de la communautés',
      lien: 'Menus',
      url: '/intranet/nutrition/menus',
      active: false,
    },
    {
      image: 'assets/iconeBottom/platBottom.png',
      titre: 'Plats',
      info: 'Vos plats ou ceux de la communauté',
      lien: 'Plats',
      url: '/intranet/nutrition/plats',
      active: false,
    },
    {
      image: 'assets/iconeBottom/ingredientBottom.png',
      titre: 'Ingrédients',
      info: 'La liste des ingrédients prenant en compte les allergies et les valeurs nutritionnelles',
      lien: 'Ingredients',
      url: '/intranet/nutrition/ingredients',
      active: false,
    },
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {
    const activeUrl = this.router.url;
    this.bottoms.forEach((item) => {
      item.active = activeUrl.startsWith(item.url);
    });
  }
  onNavItemClick(bottom: BottomI) {
    this.bottoms.forEach((item) => (item.active = false));
    bottom.active = true;
  }
}
