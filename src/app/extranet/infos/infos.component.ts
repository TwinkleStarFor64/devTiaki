import { Component, OnInit } from '@angular/core';
import { InfosService } from '../../partage/services/infos.service';

@Component({
    selector: 'app-infos',
    templateUrl: './infos.component.html',
    styleUrls: ['./infos.component.scss'],
    standalone: false
})
export class InfosComponent implements OnInit {

  constructor(public actus:InfosService) {
  }

  ngOnInit(): void {
    this.actus.getActus();
  }

}
