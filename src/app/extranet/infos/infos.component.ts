import { Component, OnInit } from '@angular/core';
import { InfosService } from '../utils/services/infos.service';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.scss']
})
export class InfosComponent implements OnInit {

  constructor(public actus:InfosService) {
  }

  ngOnInit(): void {
    this.actus.getActus();
  }

}
