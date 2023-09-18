import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BottomI, NutritionI } from '../modeles/Types';
import { SanityService } from 'src/app/partage/services/sanity.service';

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.component.html',
  styleUrls: ['./nutrition.component.scss']
})
export class NutritionComponent implements OnInit {

  public bottoms:BottomI[] = [
    {
      image:"assets/iconeBottom/journalBottom.png",
      titre:"Journal",
      info:"Naviguer dans votre historique alimentaire",
      lien:'Journal',
      url:'/intranet/nutrition/journalRepas',
      active:false
    },
    {
      image:"assets/iconeBottom/journalBottom.png",
      titre:"Menus",
      info:"Les listes de vos menus et de ceux de la communautés",
      lien:'Menus',
      url:'/intranet/nutrition/menus',
      active:false
    },
    {
      image:"assets/iconeBottom/platBottom.png",
      titre:"Plats",
      info:"Vos plats ou ceux de la communauté",
      lien:'Plats',
      url:'/intranet/nutrition/plats',
      active:false
    },
    {
      image:"assets/iconeBottom/ingredientBottom.png",
      titre:"Ingrédients",
      info:"La liste des ingrédients prenant en compte les allergies et les valeurs nutritionnelles",
      lien:'Ingredients',
      url:'/intranet/nutrition/ingredients',
      active:false
    }
  ];

  // public cards:any = [
  //   {
  //     title:"Journal",
  //     text:"Naviguer dans votre historique alimentaire",
  //     button:"Accéder à la page Journal",
  //     image:"assets/photoNutri/accueilJournal.svg",
  //     url:'journal-Repas'
  //   },
  //   {
  //     title:"Menus",
  //     text:"Les listes de vos menus et de ceux de la communautés",
  //     button:"Accéder à la page des Menus",
  //     image:"assets/photoNutri/accueilMenus.svg",
  //     url:'menus'
  //   },
  //   {
  //     title:"Plats",
  //     text:"Vos plats ou ceux de la communauté",
  //     button:"Accéder à la page des Plats",
  //     image:"assets/photoNutri/accueilPlats.svg",
  //     url:'plats'
  //   },
  //   {
  //     title:"Ingrédients",
  //     text:"La liste des ingrédients prenant en compte les allergies et les valeurs nutritionnelles",
  //     button:"Accéder à la page Ingrédients",
  //     image:"assets/photoNutri/accueilIngredients.svg",
  //     url:'ingredients'
  //   },
  // ];

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
