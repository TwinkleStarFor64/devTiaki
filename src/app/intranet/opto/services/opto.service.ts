import { inject, Injectable } from '@angular/core';
import { BottomI } from '../../utils/modeles/Types';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OptoService {
  bottomOpto: BottomI[] = [];
  http: HttpClient = inject(HttpClient);

}
