import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { InfosService } from './partage/services/infos.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Tiaki, pour aider les aidants';

  constructor(private router: Router, private l: InfosService) { }

  ngOnInit(): void {
    if (!this.l.t) this.l.getTraductions(); // Récupérer les traductions si elles n'ont pas déjà été loadées
    // Récuéprer les routes pour paramétrer le fil d'Ariane
    this.router.events.subscribe({
      next: (r) => {
        if (r instanceof NavigationEnd) {
          this.l.ariane = [];
          console.log(this.router.url);
          let path = '';
          this.router.url.split('/').slice(1).forEach((u, i) => {
            path += '/'+u;
            this.l.ariane.push({
              path,
              titre: this.l.t.routes[u.toUpperCase()],
              classe: this.l.setClasse(this.router.url)
            })
          }
          );
        console.log("Ariane", this.l.ariane);
        }
      },
      error: er => console.log(er),
      complete: () => { }
    });
  }
}
