import { Component, OnInit } from '@angular/core';
import { ProfilService } from './services/profil.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
export class ProfilComponent implements OnInit {
  constructor(public profil: ProfilService) {}

  ngOnInit(): void {
    this.profil.getBottomBarTableau();
  }
}
