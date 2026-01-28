import { inject, Injectable } from '@angular/core';
import { BottomI } from '../modeles/Types';
import { DonneesService } from './donnees.service';

@Injectable({
  providedIn: 'root',
})
export class ToolsService {
  d: DonneesService = inject(DonneesService);

  onNavItemClick(b: BottomI) {
    if (this.d.bottom) {
      this.d.bottom.forEach((item) => item.active = false);
      b.active = true;
    }
  }
}
