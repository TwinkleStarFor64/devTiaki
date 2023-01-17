import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bottom-bar-kine-opto',
  templateUrl: './bottom-bar-kine-opto.component.html',
  styleUrls: ['./bottom-bar-kine-opto.component.scss']
})
export class BottomBarKineOptoComponent implements OnInit {

  public isCurrentPage:string;
  public bottoms:any = [
    {
      image:"assets/iconeBottom/cheerleader.svg",
      title:"Progression d'Émilie",
      info:"Suivez les progréssion d'Émilie",
    },
    {
      image:"assets/iconeBottom/programme.svg",
      title:"Programmes",
      info:"Des programmes de kinésithérapie",
    },
    {
      image:"assets/iconeBottom/exerciceIcon.svg",
      title:"Exercices",
      info:"Découvrez les exercices.",
    },
  ]

  constructor(private router: Router) {
    this.isCurrentPage = this.router.url.split('/')[1];
  }

  ngOnInit(): void {
  }
 
}
