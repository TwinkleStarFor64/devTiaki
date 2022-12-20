import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asidebar',
  templateUrl: './asidebar.component.html',
  styleUrls: ['./asidebar.component.scss']
})
export class AsidebarComponent implements OnInit {
logo:any = [
  {
    image:'../../../assets/img/cheerleader1.svg',
   
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}
