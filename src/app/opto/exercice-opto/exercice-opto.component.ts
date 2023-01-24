import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-otpo',
  templateUrl: './exercice-opto.component.html',
  styleUrls: ['./exercice-opto.component.scss']
})
export class ExerciceOptoComponent implements OnInit {
  avatar!:string;
  constructor() { }

  ngOnInit(): void {
    this.avatar = 'assets/imgAsidebar/cheerleader1.svg';
  }

}
