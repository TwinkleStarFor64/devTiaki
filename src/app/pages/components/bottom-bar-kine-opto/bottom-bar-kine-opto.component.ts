import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-bottom-bar-kine-opto',
  templateUrl: './bottom-bar-kine-opto.component.html',
  styleUrls: ['./bottom-bar-kine-opto.component.scss']
})
export class BottomBarKineOptoComponent implements OnInit {
  
  public bottoms:any = [
    {
      image:"assets/iconeBottom/cheerleader.svg",
      title:"Progression d'Émilie",
      info:"Suivez les progréssion d'Émilie",
      lien:'ProgressioneKine',
      url:'/progressioneKine',
    },
    {
      image:"assets/iconeBottom/programme.svg",
      title:"Programmes",
      info:"Des programmes de kinésithérapie",
      lien:'ProgrammeKine',
      url:'/programmeKine',
    },
    {
      image:"assets/iconeBottom/exerciceIcon.svg",
      title:"Exercices",
      info:"Découvrez les exercices.",
      lien:'ExerciceKine',
      url:'/exerciceKine',
    },
  ]

  constructor(private router: Router) {
  
  }

  ngOnInit(): void {
    
  }

}
