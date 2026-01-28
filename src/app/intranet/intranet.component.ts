import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AsideBarComponent } from './template/aside-bar/aside-bar.component';
import { BottomI } from './utils/modeles/Types';
import { ArianeComponent } from './template/ariane/ariane.component';
import { DonneesService } from './utils/services/donnees.service';
@Component({selector: 'app-intranet',
  templateUrl: './intranet.component.html',
  styleUrls: ['./intranet.component.scss'],
  imports: [RouterOutlet, AsideBarComponent, ArianeComponent],
  standalone: true})
export class IntranetComponent implements OnInit {
  bottoms: any = {};
  
  router: Router = inject(Router);
  d:DonneesService = inject(DonneesService);

  ngOnInit(): void {
    const activeUrl = this.router.url;
    this.d.getBottoms().subscribe({
      next: (resp) => {
        this.bottoms = resp;
      },
      error: (er) => console.log(er),
      complete: () => console.log("Footer chargé", this.bottoms)
    });
    // this.bottoms.forEach((item) => {
    //   item.active = activeUrl.startsWith(item.url);
    // });
  };
  /** */
  onNavItemClick(bottom: BottomI) {
    this.bottoms.forEach((item:any) => (item.active = false));
    bottom.active = true;
  }
}
