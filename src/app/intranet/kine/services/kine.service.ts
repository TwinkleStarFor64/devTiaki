import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BottomI } from '../../utils/modeles/Types';

@Injectable({
  providedIn: 'root',
})
export class KineService {
  bottomKine: BottomI[] = [];
  http: HttpClient = inject(HttpClient);
}
