import { Injectable } from '@angular/core';

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

  private currentUser: any = null;
  private userRoles: string[] = [];

  constructor() {
    // Load user data from localStorage if available
    this.loadUserFromStorage();
  }

  /**
   * Check if user is authenticated
   */
  estAuthentifie(): boolean {
    return this.currentUser !== null && this.hasValidToken();
  }

  /**
   * Check if user has a specific role
   */
  hasRole(role: string): boolean {
    return this.userRoles.includes(role);
  }

  /**
   * Get current user
   */
  getCurrentUser(): any {
    return this.currentUser;
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
    this.currentUser = user;
    this.userRoles = roles;
    this.saveUserToStorage();
  }

  /**
   * Logout user
   */
  logout(): void {
    this.currentUser = null;
    this.userRoles = [];
    this.clearUserFromStorage();
  }

  /**
   * Check if token is valid (placeholder implementation)
   */
  private hasValidToken(): boolean {
    // TODO: Implement actual token validation
    // This should check JWT token expiration, etc.
    const token = localStorage.getItem('auth_token');
    return token !== null;
  }

  /**
   * Save user data to localStorage
   */
  private saveUserToStorage(): void {
    if (this.currentUser) {
      localStorage.setItem('current_user', JSON.stringify(this.currentUser));
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
      this.currentUser = JSON.parse(userData);
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
