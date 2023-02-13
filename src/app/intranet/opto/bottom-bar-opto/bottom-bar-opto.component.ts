import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BottomI } from 'src/app/intranet/modeles/Types.js';

@Component({
  selector: 'app-bottom-bar-opto',
  templateUrl: './bottom-bar-opto.component.html',
  styleUrls: ['./bottom-bar-opto.component.scss']
})
export class BottomBarOptoComponent implements OnInit {
  public bottoms: BottomI[] = [
    {
      image:"assets/iconeBottom/cheerleader.svg",
      titre:"Progression d'Émilie",
      info:"Suivez les progréssion d'Émilie",
      lien:'ProgressionOpto',
      url:'/intranet/opto/progressionOpto',
      active: false,
    },
    {
      image:"assets/iconeBottom/programme.svg",
      titre:"Programmes",
      info:"Des programmes de kinésithérapie",
      lien:'ProgrammeOpto',
      url:'/intranet/opto/programmeOpto',
      active: false,
    },
    {
      image:"assets/iconeBottom/exerciceIcon.svg",
      titre:"Exercices",
      info:"Découvrez les exercices.",
      lien:'ExerciceOpto',
      url:'/intranet/opto/exerciceOpto',
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
