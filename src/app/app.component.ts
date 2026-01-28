import { NavigationEnd, Router, RouterOutlet } from '@angular/router';

import { Component, inject, OnInit } from '@angular/core';
import { InfosService } from './partage/services/infos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet],
  
})
export class AppComponent implements OnInit {
  title = 'Tiaki, pour aider les aidants';

  private r:Router = inject(Router);
  private l:InfosService = inject(InfosService);

  ngOnInit(): void {
    if (!this.l.t) this.l.getTraductions(); // Récupérer les traductions si elles n'ont pas déjà été loadées
    // Récuéprer les routes pour paramétrer le fil d'Ariane
    this.r.events.subscribe({
      next: (r) => {
        if (r instanceof NavigationEnd) {
          this.l.ariane = [];
          console.log(this.r.url);
          let path = '';
          this.r.url.split('/').slice(1).forEach((u, i) => {
            path += '/'+u;
            this.l.ariane.push({
              path,
              titre: this.l.t.routes[u.toUpperCase()],
              classe: this.l.setClasse(this.r.url)
            })
          }
          );
        }
      },
      error: er => console.log(er),
      complete: () => { }
    });
  }
}
