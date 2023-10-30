import { Component, OnInit } from '@angular/core';
import { SanityService } from 'src/app/partage/services/sanity.service';
import { AccueilI } from '../partage/modeles/Types';
import { KineService } from './services/kine.service';

@Component({
  selector: 'app-kine',
  templateUrl: './kine.component.html',
  styleUrls: ['./kine.component.scss'],
})
export class KineComponent implements OnInit {
  accueilKine!: AccueilI[];

  constructor(public sanity: SanityService, public kine:KineService) { }

  ngOnInit(): void {
    this.sanity.getAccueilKine().then((data) => {
      this.accueilKine = data.sort((a, b) => a.id - b.id);
    });
    if(this.kine.accueil.length == 0) this.kine.getAccueil();
  }

}
