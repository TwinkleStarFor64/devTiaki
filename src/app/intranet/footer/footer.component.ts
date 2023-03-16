import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BottomI } from '../modeles/Types';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
 public module!: string;
  public bottoms: BottomI[] = [
    {
      image:"assets/iconeBottom/cheerleader.svg",
      titre:"Progression d'Émilie",
      info:"Suivez les progréssion d'Émilie",
      lien:'ProgressionKine',
      url:'/intranet/kine/progression-Kine',
      active: false,
      activeUrl:'/intranet/kine/progression-Kine',
      module : ''
    },
    {
      image:"assets/iconeBottom/programme.svg",
      titre:"Programmes",
      info:"Des programmes de kinésithérapie",
      lien:'ProgrammeKine',
      url:'/intranet/kine/programme-Kine',
      active: false,
      activeUrl:'/intranet/kine/programme-Kine',
      module : ''
    },
    {
      image:"assets/iconeBottom/exerciceIcon.svg",
      titre:"Exercices",
      info:"Découvrez les exercices.",
      lien:'ExerciceKine',
      url:'/intranet/kine/exercice-Kine',
      active: false,
      activeUrl:'/intranet/kine/exercice-Kine',
      module : ''
    },
  ];

 

  constructor(private router: Router) {
    const route = this.router.url;
    if (route.includes('kine')) {
      this.module = 'kine';
    } else if (route.includes('opto')) {
      this.module = 'opto';
    } else if (route.includes('nutrition')) {
      this.module = 'nutrition';
    }
  }
  
  ngOnInit(): void {
    const activeUrl = this.router.url;
    this.bottoms.forEach(item => {
        item.active = activeUrl.startsWith(item.url);
        item.activeUrl = activeUrl;
    });
  }

  onNavItemClick(bottom: BottomI) {
    this.bottoms.forEach(item => item.active = false);
    bottom.active = true;
  }

}
