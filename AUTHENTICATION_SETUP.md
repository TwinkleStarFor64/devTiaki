# Configuration de l'Authentification avec Supabase

## 🎯 Fonctionnalités Implémentées

### ✅ Inscription d'Utilisateurs
- Formulaire d'inscription complet avec validation
- Création automatique du profil utilisateur
- Gestion des rôles basée sur la profession
- Validation email automatique

### ✅ Connexion/Déconnexion
- Formulaire de connexion sécurisé
- Gestion des sessions utilisateur
- Redirection automatique après connexion
- Persistance de la session

### ✅ Réinitialisation de Mot de Passe
- Demande de réinitialisation par email
- Interface de changement de mot de passe
- Liens sécurisés avec tokens

### ✅ Gestion des Profils
- Table profils avec informations détaillées
- Mise à jour des profils utilisateur
- Gestion des préférences

## 🛠️ Configuration Supabase

### 1. Créer la Table Profils

Exécutez le script SQL suivant dans votre console Supabase :

```sql
-- Voir le fichier: database/create-profils-table.sql
```

### 2. Configuration des Variables d'Environnement

Dans `src/environments/environment.ts` :

```typescript
export const environment = {
  production: false,
  supabaseUrl: 'VOTRE_SUPABASE_URL',
  supabaseKey: 'VOTRE_SUPABASE_ANON_KEY'
};
```

### 3. Configuration de l'Authentification Supabase

Dans votre dashboard Supabase :

1. **Authentication > Settings**
   - Activez "Enable email confirmations"
   - Configurez les URLs de redirection
   - Définissez les templates d'emails

2. **Authentication > URL Configuration**
   - Site URL: `http://localhost:4200` (développement)
   - Redirect URLs: 
     - `http://localhost:4200/reset-password`
     - `http://localhost:4200/`

## 📁 Structure des Fichiers

```
src/app/
├── extranet/
│   ├── connexion/           # Composant de connexion
│   ├── inscription/         # Composant d'inscription
│   └── reset-password/      # Réinitialisation mot de passe
├── partage/
│   ├── services/
│   │   ├── auth.service.ts      # Service d'authentification
│   │   └── connexion.service.ts # Service de gestion utilisateur
│   └── securite/
│       └── guards/
│           └── auth.guard.ts    # Guards de protection des routes
└── database/
    └── create-profils-table.sql # Script de création de la table
```

## 🚀 Utilisation

### Inscription d'un Nouvel Utilisateur

```typescript
// Dans un composant
constructor(private authService: AuthService) {}

async inscription() {
  const userData = {
    email: 'user@example.com',
    password: 'motdepasse123',
    nom: 'Dupont',
    prenom: 'Jean',
    profession: 'medecin'
  };

  const result = await this.authService.inscription(userData);
  
  if (result.success) {
    console.log('Inscription réussie');
  } else {
    console.error('Erreur:', result.error);
  }
}
```

### Connexion

```typescript
async connexion() {
  const result = await this.authService.connexion(
    'user@example.com', 
    'motdepasse123'
  );
  
  if (result.success) {
    // Redirection vers l'application
    this.router.navigate(['/intranet']);
  }
}
```

### Vérification d'Authentification

```typescript
// Dans un guard ou composant
if (this.authService.isAuthenticated()) {
  // Utilisateur connecté
}

// Observer les changements d'état
this.authService.currentUser$.subscribe(user => {
  if (user) {
    console.log('Utilisateur connecté:', user);
  }
});
```

## 🔐 Sécurité

### Row Level Security (RLS)

La table `profils` utilise RLS pour sécuriser l'accès :

- Les utilisateurs ne peuvent voir que leur propre profil
- Seul le propriétaire peut modifier son profil
- Insertion automatique lors de l'inscription

### Gestion des Rôles

Les rôles sont attribués automatiquement selon la profession :

```typescript
// Rôles disponibles
- ROLE_USER (tous les utilisateurs)
- ROLE_MEDECIN
- ROLE_INFIRMIER  
- ROLE_KINE
- ROLE_OPTO
- ROLE_NUTRITIONNISTE
- ROLE_AIDANT
- ROLE_ADMIN
```

### Protection des Routes

```typescript
// Dans app.routes.ts
{
  path: 'intranet',
  loadChildren: () => import('./intranet/intranet.routes'),
  canActivate: [authGuard]  // Protection par authentification
}

{
  path: 'admin',
  loadChildren: () => import('./admin/admin.routes'),
  canActivate: [adminGuard]  // Protection par rôle admin
}
```

## 🎨 Interface Utilisateur

### Composants Créés

1. **InscriptionComponent**
   - Formulaire réactif avec validation
   - Gestion des erreurs en temps réel
   - Design responsive avec Material Design

2. **ConnexionComponent**
   - Formulaire de connexion simplifié
   - Liens vers inscription et reset password
   - Accès temporaire au prototype

3. **ResetPasswordComponent**
   - Demande de réinitialisation par email
   - Interface de changement de mot de passe
   - Gestion des tokens de sécurité

### Styles et UX

- Design moderne avec gradients
- Animations fluides
- Messages d'erreur contextuels
- Responsive design pour mobile
- Feedback visuel pour les actions

## 🧪 Tests

### Tests à Effectuer

1. **Inscription**
   - [ ] Validation des champs obligatoires
   - [ ] Vérification email unique
   - [ ] Création du profil en base
   - [ ] Envoi email de confirmation

2. **Connexion**
   - [ ] Authentification avec email/password
   - [ ] Gestion des erreurs (mauvais identifiants)
   - [ ] Redirection après connexion
   - [ ] Persistance de session

3. **Réinitialisation**
   - [ ] Envoi email de reset
   - [ ] Changement de mot de passe
   - [ ] Validation des nouveaux mots de passe

## 📝 Notes de Développement

### Prochaines Étapes

1. **Améliorer la Sécurité**
   - Implémenter la vérification 2FA
   - Ajouter des limites de tentatives de connexion
   - Logs d'audit des connexions

2. **Fonctionnalités Avancées**
   - Connexion avec réseaux sociaux
   - Gestion des équipes/organisations
   - Notifications push

3. **Optimisations**
   - Cache des données utilisateur
   - Lazy loading des profils
   - Compression des images de profil

### Problèmes Connus

- La réinitialisation de mot de passe nécessite une configuration SMTP
- Les emails de confirmation peuvent arriver en spam
- La validation côté client doit être complétée côté serveur

## 🆘 Dépannage

### Erreurs Communes

1. **"Invalid login credentials"**
   - Vérifier email/password
   - Confirmer que l'email est vérifié

2. **"User already registered"**
   - L'email existe déjà en base
   - Utiliser la fonction de reset password

3. **Problèmes de CORS**
   - Vérifier la configuration des URLs dans Supabase
   - Ajouter localhost aux URLs autorisées

### Support

Pour toute question ou problème :
1. Vérifier les logs de la console navigateur
2. Consulter les logs Supabase
3. Vérifier la configuration des variables d'environnement