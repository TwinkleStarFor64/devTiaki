import { Component, OnInit } from '@angular/core';
import { AsideI } from 'src/app/modeles/Types';

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

  constructor() { }

  ngOnInit(): void {
  }

}
