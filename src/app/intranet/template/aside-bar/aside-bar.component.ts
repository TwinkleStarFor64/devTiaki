import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { Component, OnInit } from '@angular/core';
import { AsideI } from 'src/app/intranet/modeles/Types.js';

@Component({
  selector: 'app-aside-bar',
  templateUrl: './aside-bar.component.html',
  styleUrls: ['./aside-bar.component.scss'],
  standalone: true,
  imports: [RouterLink, CommonModule, MatButtonModule, MatIconModule],
  
})
export class AsideBarComponent implements OnInit {
  value: number = 7;
  navbarVisible: boolean = false;

  // Insertion de l'interface Aside permettant de changer les image et les urls
  public asides: AsideI[] = [
    {
      nom: 'Émilie',
      image: 'assets/imgAsidebar/cheerleader1.svg',
      url: '/intranet/tableau',
    },
    {
      nom: 'Kalhifa',
      image: 'assets/imgAsidebar/skier1.svg',
      url: '/intranet/tableau',
    },
    {
      nom: 'Nutrition',
      image: 'assets/imgAsidebar/Vector.svg',
      url: '/intranet/nutrition',
    },
    {
      nom: 'Kiné',
      image: 'assets/imgAsidebar/Vector1.svg',
      url: '/intranet/kine',
    },
    {
      nom: 'Opto',
      image: 'assets/imgAsidebar/Group1.svg',
      url: '/intranet/opto',
    },
    {
      nom: 'Journal',
      image: 'assets/imgAsidebar/Group2.svg',
      url: '/intranet/outils/journal',
    },
    {
      nom: 'Historique',
      image: 'assets/imgAsidebar/Group3.svg',
      url: '/intranet/outils/historique',
    },
    {
      nom: 'Messagerie',
      image: 'assets/imgAsidebar/Group4.svg',
      url: '/intranet/outils/messagerie',
    },
    {
      nom: 'Profil',
      image: 'assets/imgAsidebar/Group5.svg',
      url: '/intranet/outils/profil',
    },
    {
      nom: 'Paramètre',
      image: 'assets/imgAsidebar/Group6.svg',
      url: '/intranet/outils/parametre',
    },
  ];
  public hoveredIndex: number | null = null;
  constructor() {}

  ngOnInit(): void {}
  toggleNavbar() {
    this.navbarVisible = !this.navbarVisible;
  }
}
