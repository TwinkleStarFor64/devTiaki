import { Injectable } from '@angular/core';
import { CheriI } from '../partage/modeles/Types';
import { DonneesService } from '../partage/services/donnees.service';

@Injectable({
  providedIn: 'root'
})
export class CheriService {

  cheri:CheriI = {id:-1, idCheri:-1, nom:"", prenom:"", roles:[]};

  constructor(private get:DonneesService) { }
}
