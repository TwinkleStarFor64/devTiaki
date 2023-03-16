import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BottomI } from '../modeles/Types';
import { KineService } from '../kine/services/kine.service';
import { OptoService } from '../opto/services/opto.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  // public bottoms: BottomI[] = [];
   
  constructor(private router: Router, public activatedRoute: ActivatedRoute, public kineFooter: KineService, public optoFooter: OptoService) { }

  ngOnInit(): void {
    const activeUrl = this.router.url;
    this.kineFooter.getBottomKine().forEach(item => {
      item.active = activeUrl.startsWith(item.url);
      console.log(item.active);
    });
    const bottoms = this.kineFooter.getBottomKine();
    console.log(bottoms);
    this.optoFooter.getBottomOpto();
  }

  // onActivatedUrl(urlBottom: BottomI) {
  //   this.bottoms.forEach(url => url.active = true);
  //   urlBottom.active = true;
  // }

  onNavItemClick(bottom: BottomI) {
    this.kineFooter.getBottomKine().forEach(item => item.active = false);
    bottom.active = true;
  }

}