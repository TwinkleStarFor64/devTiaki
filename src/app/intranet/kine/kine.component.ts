import { Component, inject, OnInit } from '@angular/core';
import { SanityService } from 'src/app/partage/services/sanity.service';
import { AccueilI, BottomI } from '../utils/modeles/Types';
import { IntranetModule } from '../intranet.module';
import { Router, RouterOutlet } from '@angular/router';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-kine',
  templateUrl: './kine.component.html',
  styleUrls: ['./kine.component.scss'],
  imports: [IntranetModule, RouterOutlet, NgStyle],
  standalone: true
})
export class KineComponent implements OnInit {
  bottoms: Array<BottomI> = [
    {
      image: "assets/iconeBottom/cheerleader.svg",
      titre: "Progression d'Émilie",
      info: "Suivez les progréssion d'Émilie",
      lien: 'ProgressionKine',
      url: '/intranet/kine/progression-Kine',
      active: false,
    },
    {
      image: "assets/iconeBottom/programme.svg",
      titre: "Programmes",
      info: "Des programmes de kinésithérapie",
      lien: 'ProgrammeKine',
      url: '/intranet/kine/programme-Kine',
      active: false,
    },
    {
      image: "assets/iconeBottom/exerciceIcon.svg",
      titre: "Exercices",
      info: "Découvrez les exercices.",
      lien: 'ExerciceKine',
      url: '/intranet/kine/exercice-Kine',
      active: false,
    },
  ];
  r: Router = inject(Router);
  u:boolean = false;
  // Gérer la navigation
  onNavItemClick(bottom?: BottomI) {
    if (bottom) {
      this.bottoms.forEach(item => item.active = false);
      bottom.active = true;
      this.u = true;
      this.r.navigateByUrl(bottom.url);
    }else{
      this.u = false;
      this.r.navigateByUrl('/intranet/kine');
    }
  }

  accueilKine!: AccueilI[];
  constructor(public sanity: SanityService) { }
  ngOnInit(): void {
    this.sanity.getAccueilKine().then((data) => {
      this.accueilKine = data.sort((a, b) => a.id - b.id);
    });

    this.u = false; // Initialisation de l'URL

    // this.bottoms.forEach(item => {
    //   item.active = this.router.url.startsWith(item.url);
    // });
  }

}
