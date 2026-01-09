import { RouterLink } from '@angular/router';
import { Component, OnInit, inject } from '@angular/core';
import { InfosService } from '../../partage/services/infos.service';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.scss'],
  standalone: true,
  imports: [],
})
export class InfosComponent implements OnInit {
  infos:InfosService = inject(InfosService);

  ngOnInit(): void {
    this.infos.getActus();
  }
}
