import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BottomI } from './modeles/Types';

@Component({
    selector: 'app-intranet',
    templateUrl: './intranet.component.html',
    styleUrls: ['./intranet.component.scss'],
    standalone: false
})
export class IntranetComponent implements OnInit {
  public bottoms: BottomI[] = [
    {
      image: 'assets/iconeBottom/cheerleader.svg',
      titre: "Progression d'Émilie",
      info: "Suivez les progréssion d'Émilie",
      lien: 'ProgressionKine',
      url: '/intranet/kine/progression-Kine',
      active: false,
    },
    {
      image: 'assets/iconeBottom/programme.svg',
      titre: 'Programmes',
      info: 'Des programmes de kinésithérapie',
      lien: 'ProgrammeKine',
      url: '/intranet/kine/programme-Kine',
      active: false,
    },
    {
      image: 'assets/iconeBottom/exerciceIcon.svg',
      titre: 'Exercices',
      info: 'Découvrez les exercices.',
      lien: 'ExerciceKine',
      url: '/intranet/kine/exercice-Kine',
      active: false,
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    const activeUrl = this.router.url;
    this.bottoms.forEach((item) => {
      item.active = activeUrl.startsWith(item.url);
    });
  }
  onNavItemClick(bottom: BottomI) {
    this.bottoms.forEach((item) => (item.active = false));
    bottom.active = true;
  }
}
