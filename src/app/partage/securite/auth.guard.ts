import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { ConnexionService } from '../services/connexion.service';

const connexion:ConnexionService = inject(ConnexionService);

export const authGuard: CanActivateFn = (route, state) => {
  return connexion.connecte;
};
