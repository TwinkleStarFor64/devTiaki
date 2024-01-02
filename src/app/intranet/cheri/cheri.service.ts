import { Injectable } from '@angular/core';
import { DonneesService } from '../partage/services/donnees.service';
import { CheriI } from 'src/app/partage/modeles/Types';

@Injectable({
  providedIn: 'root'
})
export class CheriService {

  cheri:CheriI = {id:-1, idCheri:-1, nom:"", prenom:"", roles:[]};

  constructor(private get:DonneesService) { }
  /**
   * Récupérer la liste des informations d'un chéri
   * @param id Id du chéri dont on récupère les infos
  */
  getInfosCheri(){
    console.log("Récupération des infos du chéri");
    this.get.supa.from('cheris')
      // .select(`*,
      //     infos:utilisateurs(*, roles:attribuerRoles!attribuerRoles_idUtilisateur_fkey(enfant:roles(role))),
      //     cheris:attribuerCheris!attribuerCheris_idAidant_fkey(enfant:cheris(*))
      // `)
      .select(`*,
          optoProgressions:attribuerOptoProgressions!inner(enfant:optoProgressions(*)),
          kineProgressions:attribuerKineProgressions!inner(enfant:kineProgressions(*)),
          therapeutes:attribuerTherapeutes!inner(enfant:therapeutes(*))
      `)
      .eq('cheris', this.cheri.id)
      .then(({data, error}) => {
        console.log(data);
        // if (error) this.l.erreur("Erreur dans le chargement des données du profil", error);
      });
  }
}
