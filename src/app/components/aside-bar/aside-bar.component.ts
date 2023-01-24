import { Component, OnInit } from '@angular/core';
import { AsideI } from 'src/app/modeles/Types';

@Component({
  selector: 'app-aside-bar',
  templateUrl: './aside-bar.component.html',
  styleUrls: ['./aside-bar.component.scss']
})
export class AsideBarComponent implements OnInit {
value: number = 7; 

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
    image:'assets/imgAsidebar/Vector.svg',
    url:'/journalRepas'
  },
  {
    nom:'',
    image:'assets/imgAsidebar/Vector1.svg',
    url:'/progressionKine'
  },
  {
    nom:'',
    image:'assets/imgAsidebar/Group1.svg',
    url:'/progressionOpto'
  },
  {
    nom:'',
    image:'assets/imgAsidebar/Group2.svg',
    url:'/journal'
  },
  {
    nom:'',
    image:'assets/imgAsidebar/Group3.svg',
    url:'/historique'
  },
  {
    nom:'',
    image:'assets/imgAsidebar/Group4.svg',
    url:'/messagerie'
  },
  {
    nom:'',
    image:'assets/imgAsidebar/Group5.svg',
    url:'/profil'
  },
  {
    nom:'',
    image:'assets/imgAsidebar/Group6.svg',
    url:'/setting'
  }
]

// //Modifier cette fonctionnalité.
// avatars:any = [
//   {
//     image:'assets/imgAsidebar/cheerleader1.svg',
//     nom:'Émilie',
//     urlTableau:''
//   },
//   {
//     image:'assets/imgAsidebar/skier1.svg',
//     nom:'Kalhifa',
//     urlTableau:''
//   }
// ];
// applis:any = [
//   {
//     nutri:"assets/imgAsidebar/Vector.svg",
//     urlNutri:'/journalRepas',
//     kine:"assets/imgAsidebar/Vector1.svg",
//     urlKine:'/progressionKine',
//     opto:"assets/imgAsidebar/Group1.svg",
//     urlOpto:'/progressionOpto'
//   }
// ];
// tools:any =[
//   {
//     note:"assets/imgAsidebar/Group2.svg",
//     urlJournal:'/journal',
//     historique:"assets/imgAsidebar/Group3.svg",
//     urlHistorique:'/historique',
//     message:"assets/imgAsidebar/Group4.svg",
//     urlMessage:'/messagerie',
//     profil:"assets/imgAsidebar/Group5.svg",
//     urlProfil:'/profil',
//     setting:"assets/imgAsidebar/Group6.svg",
//   }
// ]
  constructor() { }

  ngOnInit(): void {
  }

}
