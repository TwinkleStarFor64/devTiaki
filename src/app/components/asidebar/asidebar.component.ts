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
    image:'../../../assets/img/cheerleader1.svg',
    nom:'Émilie',
  },
  {
    image:'../../../assets/img/skier1.svg',
    nom:'Kalhifa',
  }
];
applis:any = [
  {
    nutri:"../../../assets/img/Vector.svg",
    kine:"../../../assets/img/Vector1.svg",
    opto:"../../../assets/img/Group1.svg"
  }
];
tools:any =[
  {
    note:"../../../assets/img/Group2.svg",
    schedule:"../../../assets/img/Group3.svg",
    message:"../../../assets/img/Group4.svg",
    profil:"../../../assets/img/Group5.svg",
    setting:"../../../assets/img/Group6.svg",
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}
