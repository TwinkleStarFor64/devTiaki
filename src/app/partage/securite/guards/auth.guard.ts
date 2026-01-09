import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivateFn } from '@angular/router';
import { ConnexionService } from '../../services/connexion.service';

/**
 * Functional guard for authentication
 * Modern approach using functional guards instead of class-based guards
 */
export const authGuard: CanActivateFn = (route, state) => {
  const connexionService = inject(ConnexionService);
  const router = inject(Router);

  // Check if user is authenticated
  if (connexionService.estAuthentifie()) {
    return true;
  }

  // Redirect to login page if not authenticated
  router.navigate(['/'], { queryParams: { returnUrl: state.url } });
  return false;
};

/**
 * Functional guard for admin access
 */
export const adminGuard: CanActivateFn = (route, state) => {
  const connexionService = inject(ConnexionService);
  const router = inject(Router);

  // Check if user is authenticated and has admin role
  if (connexionService.estAuthentifie() && connexionService.hasRole('ROLE_ADMIN')) {
    return true;
  }

  // Redirect to unauthorized page
  router.navigate(['/unauthorized']);
  return false;
};

/**
 * Functional guard for aidant access
 */
export const aidantGuard: CanActivateFn = (route, state) => {
  const connexionService = inject(ConnexionService);
  const router = inject(Router);

  // Check if user is authenticated and has aidant role
  if (connexionService.estAuthentifie() && 
      (connexionService.hasRole('ROLE_AIDANT') || 
       connexionService.hasRole('ROLE_ADMIN'))) {
    return true;
  }

  // Redirect to unauthorized page
  router.navigate(['/unauthorized']);
  return false;
};