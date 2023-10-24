import { Component, Input } from '@angular/core';
import { DonneesService } from '../../partage/services/donnees.service';
import { BottomI } from '../../partage/modeles/Types';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input('idMenu') idMenu!:string; // Ide du menu dont on récupère les données
  @Input('classe') classe!:string; // La classe à appliquer sur le template

  menu:Array<BottomI> = []; // Le menu à activer, reçu depuis le composant

  constructor(private donnees:DonneesService){}

  onNavItemClick(m: BottomI) {
    this.menu.forEach((item) => (item.active = false));
    m.active = true;
  }
}
