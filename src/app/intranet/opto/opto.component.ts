import { Component, OnInit } from '@angular/core';
import { SanityService } from 'src/app/partage/services/sanity.service';
import { AccueilI } from '../partage/modeles/Types';

@Component({
  selector: 'app-opto',
  templateUrl: './opto.component.html',
  styleUrls: ['./opto.component.scss']
})
export class OptoComponent implements OnInit {

  accueilOpto!: AccueilI[];
  constructor(public sanity: SanityService) { }
  ngOnInit(): void {
    this.sanity.getAccueilOpto().then((data) => {
      this.accueilOpto = data.sort((a, b) => a.id - b.id);
    });
  }
}
