import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BottomI } from 'src/app/intranet/modeles/Types.js';


@Component({
  selector: 'app-bottom-bar-kine',
  templateUrl: './bottom-bar-kine.component.html',
  styleUrls: ['./bottom-bar-kine.component.scss']
})
export class BottomBarKineComponent implements OnInit {
  
  public bottoms: BottomI[] = [
    {
      image:"assets/iconeBottom/cheerleader.svg",
      titre:"Progression d'Émilie",
      info:"Suivez les progréssion d'Émilie",
      lien:'ProgressionKine',
      url:'/intranet/kine/progressionKine',
      active: false,
    },
    {
      image:"assets/iconeBottom/programme.svg",
      titre:"Programmes",
      info:"Des programmes de kinésithérapie",
      lien:'ProgrammeKine',
      url:'/intranet/kine/programmeKine',
      active: false,
    },
    {
      image:"assets/iconeBottom/exerciceIcon.svg",
      titre:"Exercices",
      info:"Découvrez les exercices.",
      lien:'ExerciceKine',
      url:'/intranet/kine/exerciceKine',
      active: false,
    },
  ]

  constructor(private router: Router) {
    
  }
  
  ngOnInit(): void {
    const activeUrl = this.router.url;
    this.bottoms.forEach(item => {
        item.active = activeUrl.startsWith(item.url);
    });
 
  }
  onNavItemClick(bottom:BottomI) {
    this.bottoms.forEach(item => item.active = false);
    bottom.active = true;
}

}