import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside-bar',
  templateUrl: './aside-bar.component.html',
  styleUrls: ['./aside-bar.component.scss']
})
export class AsideBarComponent implements OnInit {
value: number = 7; 


//Modifier cette fonctionnalité.
avatars:any = [
  {
    image:'assets/imgAsidebar/cheerleader1.svg',
    nom:'Émilie',
    urlTableau:''
  },
  {
    image:'assets/imgAsidebar/skier1.svg',
    nom:'Kalhifa',
  }
];
applis:any = [
  {
    nutri:"assets/imgAsidebar/Vector.svg",
    urlNutri:'/journalRepas',
    kine:"assets/imgAsidebar/Vector1.svg",
    urlKine:'/progressionKine',
    opto:"assets/imgAsidebar/Group1.svg",
    urlOpto:'/progressionOpto'
  }
];
tools:any =[
  {
    note:"assets/imgAsidebar/Group2.svg",
    urlJournal:'/journal',
    schedule:"assets/imgAsidebar/Group3.svg",
    urlHistorique:'/historique',
    message:"assets/imgAsidebar/Group4.svg",
    urlMessage:'/messagerie',
    profil:"assets/imgAsidebar/Group5.svg",
    urlProfil:'/profil',
    setting:"assets/imgAsidebar/Group6.svg",
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}
