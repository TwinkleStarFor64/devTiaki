import { Component, Input, OnInit } from '@angular/core';
import { DonneesService } from '../../partage/services/donnees.service';
import { NavI } from '../../../partage/modeles/Types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{
  @Input('idMenu') idMenu!:string; // Ide du menu dont on récupère les données
  @Input('classe') classe!:string; // La classe à appliquer sur le template

  menu:Array<NavI> = []; // Le menu à activer, reçu depuis le composant

  constructor(public get:DonneesService, private router:Router){}

  ngOnInit(): void {
    console.log(this.idMenu, this.classe);
    this.get.getSousMenus(this.idMenu);
  }

  onNavItemClick(m: NavI) {
    this.get.sousMenu.forEach((item) => (item.active = false));
    m.active = true;
    this.router.navigateByUrl(m.url);
  }
}
