import { RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnexionService } from '../../partage/services/connexion.service';
import { AuthService } from '../../partage/services/auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss'],
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule]
})
export class ConnexionComponent implements OnInit {
  titre: string = "Se connecter";
  isLoading = false;
  errorMessage = '';

  conn:ConnexionService = inject(ConnexionService);
  auth:AuthService = inject(AuthService);
  r:Router = inject(Router);

  async ngOnInit(): Promise<void> {
    console.log('connexion');
    if(localStorage.getItem("user")){
      this.auth.user = JSON.parse(localStorage.getItem("user")!);
      this.r.navigate(['/intranet']);
    };
  }

  onConnexion(form: NgForm) {
    if (form.valid) {this.conn.connecter();}
  }
}
