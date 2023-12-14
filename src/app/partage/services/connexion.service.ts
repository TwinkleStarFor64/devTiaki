import { Injectable } from '@angular/core';
import {
  AuthSession,
  createClient,
  SupabaseClient,
} from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';
import { InfosService } from './infos.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {
  connecte: boolean = false; // Valider l'état de la connexion de l'utilisateur
  connexion: any = { id: 'gerald@gerald.fr', mdp: 'gerald' };
  private supabase: SupabaseClient; // Instance du client Supabase
  _session: AuthSession | null = null; // Session d'authentification
  user: any;

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
        this.getProfilAidant();
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
  /** Récupérer les données du profil de la personne identifiée
   * L'utilisation des alias permet d'identifier un tableau relié (ex. cheris) ou un enfant à aplatir dans la réponse
  */
  getProfilAidant() {
    console.log("User id", this.user.id);
    this.supabase.from('aidants')
      // .select('*, enfant:utilisateurs(*), cheris:attribuerCheris!attribuerCheris_idAidant_fkey(enfant:cheris(*, enfant:utilisateurs(*)))')
      .select('*, enfant:utilisateurs(*), cheris:attribuerCheris!attribuerCheris_idAidant_fkey(enfant:cheris(*))')
      .eq('utilisateur', this.user.id)
      .then(({data, error}) => {
        console.log("Données du profil récupéré", data);
        // this.router.navigate(['intranet']);
        if (error) this.l.erreur("Erreur dans le chargement des données du profil", error);
      });
  }
  // Récupérer les utilisateurs sur la table public.utilisateur
  async getListeUtilisateurs() {
    return await this.supabase
    .from('utilisateur')
    .select("*, roles:attribuerRole!inner(roles(role))")
    // .select("*, roles:attribuerRoles!inner(id, roles!inner(role))")
  }
}
