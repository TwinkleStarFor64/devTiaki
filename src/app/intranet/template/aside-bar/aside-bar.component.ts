import { Component, OnInit } from '@angular/core';
import { AsideI } from 'src/app/intranet/modeles/Types.js';

@Component({
  selector: 'app-aside-bar',
  templateUrl: './aside-bar.component.html',
  styleUrls: ['./aside-bar.component.scss']
})
export class AsideBarComponent implements OnInit {
value: number = 7; 

// Insertion de l'interface Aside permettant de changer les image et les urls
public asides: AsideI[] = [
  {
    nom:'Émilie',
    image:'assets/imgAsidebar/cheerleader1.svg',
    url:'/'
  },
  {
    nom:'Kalhifa',
    image:'assets/imgAsidebar/skier1.svg',
    url:'/'
  },
  {
    nom:'',
    image:'',
    url:'/'
  },
  {
    nom:'',
    image:'assets/imgAsidebar/Vector.svg',
    url:'/intranet/nutrition'
  },
  {
    nom:'',
    image:'assets/imgAsidebar/Vector1.svg',
    url:'/intranet/kine/progressionKine'
  },
  {
    nom:'',
    image:'assets/imgAsidebar/Group1.svg',
    url:'/intranet/opto/progressionOpto'
  },
  {
    nom:'',
    image:'assets/imgAsidebar/Group2.svg',
    url:'/intranet/outils/journal'
  },
  {
    nom:'',
    image:'assets/imgAsidebar/Group3.svg',
    url:'/intranet/outils/historique'
  },
  {
    nom:'',
    image:'assets/imgAsidebar/Group4.svg',
    url:'/intranet/outils/messagerie'
  },
  {
    nom:'',
    image:'assets/imgAsidebar/Group5.svg',
    url:'/intranet/outils/profil'
  },
  {
    nom:'',
    image:'assets/imgAsidebar/Group6.svg',
    url:'/intranet/outils/setting'
  }
]

  constructor() { }

  ngOnInit(): void {
  }

}
