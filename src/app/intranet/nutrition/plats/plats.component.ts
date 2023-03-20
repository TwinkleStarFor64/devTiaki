import { Component, OnInit } from '@angular/core';
import { PlatsService } from './services/plats.service';
import { MesPlatsI } from '../../utils/modeles/Types';

@Component({
  selector: 'app-plats',
  templateUrl: './plats.component.html',
  styleUrls: ['./plats.component.scss']
})
export class PlatsComponent implements OnInit {

  constructor(public platService:PlatsService) { }

  ngOnInit(): void {
    this.platService.getMesPlats();
  }

}
