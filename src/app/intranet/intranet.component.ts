import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BottomI } from './partage/modeles/Types';

@Component({
  selector: 'app-intranet',
  templateUrl: './intranet.component.html',
  styleUrls: ['./intranet.component.scss'],
})
export class IntranetComponent implements OnInit {
  public bottoms: BottomI[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    const activeUrl = this.router.url;
    this.bottoms.forEach((item) => {
      item.active = activeUrl.startsWith(item.url);
    });
  }
  onNavItemClick(bottom: BottomI) {
    this.bottoms.forEach((item) => (item.active = false));
    bottom.active = true;
  }
}
