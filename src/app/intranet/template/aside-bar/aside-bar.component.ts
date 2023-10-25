import { Component, OnInit } from '@angular/core';
import { AsideI } from 'src/app/intranet//partage/modeles/Types.js';
import { DonneesService } from '../../partage/services/donnees.service';

@Component({
  selector: 'app-aside-bar',
  templateUrl: './aside-bar.component.html',
  styleUrls: ['./aside-bar.component.scss'],
})
export class AsideBarComponent implements OnInit {
  value: number = 7;
  navbarVisible: boolean = false;

  // Insertion de l'interface Aside permettant de changer les image et les urls
  public asides: AsideI[] = [];
  public hoveredIndex: number | null = null;

  constructor(public get:DonneesService) {}

  ngOnInit(): void {}
  toggleNavbar() {
    this.navbarVisible = !this.navbarVisible;
  }
}
