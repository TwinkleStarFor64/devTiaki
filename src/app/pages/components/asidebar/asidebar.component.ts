import { Component, OnInit } from '@angular/core';
import { KnobModule } from 'primeng/knob';

@Component({
  selector: 'app-asidebar',
  templateUrl: './asidebar.component.html',
  styleUrls: ['./asidebar.component.scss']
})
export class AsidebarComponent implements OnInit {
value: number = 7; 


//Modifier cette fonctionnalité.
avatars:any = [
  {
    image:'assets/imgAsidebar/cheerleader1.svg',
    nom:'Émilie',
  },
  {
    image:'assets/imgAsidebar/skier1.svg',
    nom:'Kalhifa',
  }
];
applis:any = [
  {
    nutri:"assets/imgAsidebar/Vector.svg",
    kine:"assets/imgAsidebar/Vector1.svg",
    urlKine:'/progressionKine',
    opto:"assets/imgAsidebar/Group1.svg"
  }
];
tools:any =[
  {
    note:"assets/imgAsidebar/Group2.svg",
    schedule:"assets/imgAsidebar/Group3.svg",
    message:"assets/imgAsidebar/Group4.svg",
    profil:"assets/imgAsidebar/Group5.svg",
    setting:"assets/imgAsidebar/Group6.svg",
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}
