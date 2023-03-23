import { Component, OnInit } from '@angular/core';
import { MenusService } from './services/menus.service';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss']
})
export class MenusComponent implements OnInit {

  constructor(public menuService:MenusService) { }

  ngOnInit(): void {
    this.menuService.getMesMenus();
  }

}
