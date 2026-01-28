import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { UserI } from '../modeles/types';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {
  connexion: any = {
    id: {
      value: '',
      placeholder: 'Renseignez vôtre identifiant'
    },
    mdp: {
      value: '',
      placeholder: 'Mot de passe'
    }
  };

  private user: any = null;
  private userRoles: string[] = [];
  private http:HttpClient = inject(HttpClient);
  private env:any = environment;
  private r:Router = inject(Router);
  private auth:AuthService = inject(AuthService);

  constructor() {
    // Load user data from localStorage if available
    this.loadUserFromStorage();
  }
  connecter(){
    return this.http.post<UserI>(this.env.API_URL + 'auth/login', {email:this.connexion.id.value, password:this.connexion.mdp.value}).subscribe({
      next: resp => {
        this.auth.user = resp;
        // Redirection vers l'intranet
          this.r.navigate(['/intranet']);
      },
      error: (er:any) => {
        console.log(er);
      }
    })
  }
  /**
   * Check if user is authenticated
   */
  estAuthentifie(): boolean {
    return this.user !== null && this.tokenValide();
  }

  /**
   * Check if user has a specific role
   */
  aRole(role: string): boolean {
    return this.userRoles.includes(role);
  }

  /**
   * Get current user
   */
  getCurrentUser(): any {
    return this.user;
  }

  /**
   * Get user roles
   */
  getUserRoles(): string[] {
    return this.userRoles;
  }

  /**
   * Set current user after successful authentication
   */
  setCurrentUser(user: any, roles: string[] = []): void {
    this.user = user;
    this.userRoles = roles;
    this.setLocalUser();
  }

  /**
   * Logout user
   */
  logout(): void {
    this.user = null;
    this.userRoles = [];
    this.clearUserFromStorage();
  }

  /**
   * Check if token is valid (placeholder implementation)
   */
  private tokenValide(): boolean {
    // TODO: Implement actual token validation
    // This should check JWT token expiration, etc.
    const token = localStorage.getItem('auth_token');
    return token !== null;
  };

  /**
   * Save user data to localStorage
   */
  private setLocalUser(): void {
    if (this.user) {
      localStorage.setItem('current_user', JSON.stringify(this.user));
      localStorage.setItem('user_roles', JSON.stringify(this.userRoles));
    }
  }

  /**
   * Load user data from localStorage
   */
  private loadUserFromStorage(): void {
    const userData = localStorage.getItem('current_user');
    const userRoles = localStorage.getItem('user_roles');
    
    if (userData) {
      this.user = JSON.parse(userData);
    }
    
    if (userRoles) {
      this.userRoles = JSON.parse(userRoles);
    }
  }

  /**
   * Clear user data from localStorage
   */
  private clearUserFromStorage(): void {
    localStorage.removeItem('current_user');
    localStorage.removeItem('user_roles');
    localStorage.removeItem('auth_token');
  }
}
