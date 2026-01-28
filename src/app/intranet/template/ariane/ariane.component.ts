import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InfosService } from 'src/app/partage/services/infos.service';

@Component({
  selector: 'app-ariane',
  templateUrl: './ariane.component.html',
  styleUrls: ['./ariane.component.scss'],
  imports: [ RouterLink, CommonModule],
  standalone: true
})
export class ArianeComponent {
  classe:string = '';
  l:InfosService = inject(InfosService);

}
