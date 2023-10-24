import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrganismeI } from 'src/app/intranet/partage/modeles/Types';

@Injectable({
  providedIn: 'root',
})
export class MessagerieService {
  nomOrga: OrganismeI[] = [];

  constructor(private http: HttpClient) {}

  getNomOrga() {
    this.http.get<OrganismeI[]>('assets/data/organisme.json').subscribe({
      next: (r) => (this.nomOrga = r),
      error: (er) => console.log(er),
      complete: () => console.log(this.nomOrga),
    });
    return this.nomOrga;
  }
}
