import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DonneesService } from '../../utils/services/donnees.service';
import { ToolsService } from '../../utils/services/tools.service';

@Component({
  selector: 'app-footer-menu',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [ RouterLink, CommonModule ],

})
export class FooterMenuComponent implements OnInit {

  // public bottoms: BottomI[] = [];
  r:Router = inject(Router);
  ar:ActivatedRoute = inject(ActivatedRoute);
  d:DonneesService = inject(DonneesService);
  to:ToolsService = inject(ToolsService);

  ngOnInit(): void {}

}