import { Injectable } from '@angular/core';
import {
  AuthSession,
  createClient,
  SupabaseClient,
} from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';
import { InfosService } from './infos.service';
import { Router } from '@angular/router';
import { UtilsService } from './utils.service';
import { AidantI } from 'src/app/partage/modeles/Types';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {
  connecte: boolean = false; // Valider l'état de la connexion de l'utilisateur
  connexion: any = { id: 'gerald@gerald.fr', mdp: 'gerald' };
  private supabase: SupabaseClient; // Instance du client Supabase
  _session: AuthSession | null = null; // Session d'authentification
  user: any;
  profil!: AidantI;

  /**  */
  constructor(private l: InfosService, private router: Router) {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }
  /** Authentifier un utilisateur depuis Supabase */
  getAuth() {
    this.supabase.auth.signInWithPassword({ email: this.connexion.id, password: this.connexion.mdp })
      .then(res => {
        this.user = res.data.user; // La réponse de la méthode avec toutes les données d'un utilisateur
        if (res.data.user!.role === 'authenticated') {
          this._session = res.data.session!; // Données de session de l'utilisateur (dont le token)
        }
        console.log("Utilisateur connecté", res, res.data);
        this.connecte = true;
        this.router.navigateByUrl('/intranet');
      })
      .catch(er => this.l.erreur("Erreur dans l'authentification", er));
  }

  // Méthode pour reset le mot de passe et vérifier si l'email existe sur la table auth.users - Pas utilisé pour le moment ( optionel)
  async resetPasswordAndCheckEmail(email: string) {
    try {
      // Récupérez la liste des utilisateurs
      const response = await this.supabase.auth.admin.listUsers();
      const users = response.data.users;
      // La méthode find itère sur les éléments du tableau users pour comparer la valeur email (email en paramétre de ma fonction et email des users)
      const checkEmail = users.find((user) => user.email === email);

      if (checkEmail) {
        console.log('email trouvé');
        // Si l'email existe en BDD
        const data = await this.supabase.auth.resetPasswordForEmail(email, {
          redirectTo: '/reset',
        });
        return data;
      } else {
        // L'utilisateur n'existe pas
        console.log('Utilisateur non trouvé');
        return null;
      }
    } catch (error) {
      console.error(error);
      return error;
    }
  }
  // Récupérer son mot de passe en cas de perte - Reset du Password
  async resetPassword(email: string) {
    const data = await this.supabase.auth.resetPasswordForEmail(email, {
      redirectTo: '/reset',
    });
    return data;
  }
  /** Sauvegarder l'utilisateur dans la session locale */
  setAuthSession() {
    sessionStorage.setItem('aidant', JSON.stringify(this.user));
  }
  /** Récupérer l'utilisateur dans la session locale */
  async getAuthSession() {
    if (!this.user && await sessionStorage.getItem('aidant')) {
      this.user = await JSON.parse(sessionStorage.getItem('aidant')!);
    }
  }
}
