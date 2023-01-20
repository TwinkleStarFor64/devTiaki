import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programme-kine',
  templateUrl: './programme-kine.component.html',
  styleUrls: ['./programme-kine.component.scss']
})
export class ProgrammeKineComponent implements OnInit {
  avatar!:string;

  constructor() { }

  ngOnInit(): void {
    this.avatar = 'assets/imgAsidebar/cheerleader1.svg';

  }

}
