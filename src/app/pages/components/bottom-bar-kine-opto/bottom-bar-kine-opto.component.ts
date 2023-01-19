import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Bottom } from 'src/app/interfaces/bottom.interface';

@Component({
  selector: 'app-bottom-bar-kine-opto',
  templateUrl: './bottom-bar-kine-opto.component.html',
  styleUrls: ['./bottom-bar-kine-opto.component.scss']
})
export class BottomBarKineOptoComponent implements OnInit {
  
  public bottoms: Bottom[] = [
    {
      image:"assets/iconeBottom/cheerleader.svg",
      title:"Progression d'Émilie",
      info:"Suivez les progréssion d'Émilie",
      lien:'ProgressionKine',
      url:'/progressionKine',
      active: false,
    },
    {
      image:"assets/iconeBottom/programme.svg",
      title:"Programmes",
      info:"Des programmes de kinésithérapie",
      lien:'ProgrammeKine',
      url:'/programmeKine',
      active: false,
    },
    {
      image:"assets/iconeBottom/exerciceIcon.svg",
      title:"Exercices",
      info:"Découvrez les exercices.",
      lien:'ExerciceKine',
      url:'/exerciceKine',
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
  onNavItemClick(bottom: Bottom) {
    this.bottoms.forEach(item => item.active = false);
    bottom.active = true;
}

}
