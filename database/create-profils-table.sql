-- Création de la table profils pour stocker les informations utilisateur
CREATE TABLE IF NOT EXISTS profils (
    id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    nom VARCHAR(100) NOT NULL,
    prenom VARCHAR(100) NOT NULL,
    telephone VARCHAR(20),
    date_naissance DATE,
    adresse TEXT,
    ville VARCHAR(100),
    code_postal VARCHAR(10),
    profession VARCHAR(50),
    accepter_newsletter BOOLEAN DEFAULT false,
    date_creation TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    date_modification TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    actif BOOLEAN DEFAULT true,
    avatar_url TEXT,
    bio TEXT
);

-- Index pour améliorer les performances
CREATE INDEX IF NOT EXISTS idx_profils_email ON profils(email);
CREATE INDEX IF NOT EXISTS idx_profils_profession ON profils(profession);
CREATE INDEX IF NOT EXISTS idx_profils_actif ON profils(actif);

-- Trigger pour mettre à jour automatiquement date_modification
CREATE OR REPLACE FUNCTION update_modified_time()
RETURNS TRIGGER AS $$
BEGIN
    NEW.date_modification = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_profils_modified_time
    BEFORE UPDATE ON profils
    FOR EACH ROW
    EXECUTE FUNCTION update_modified_time();

-- RLS (Row Level Security) pour sécuriser l'accès aux données
ALTER TABLE profils ENABLE ROW LEVEL SECURITY;

-- Politique pour permettre aux utilisateurs de voir leur propre profil
CREATE POLICY "Les utilisateurs peuvent voir leur propre profil" ON profils
    FOR SELECT USING (auth.uid() = id);

-- Politique pour permettre aux utilisateurs de mettre à jour leur propre profil
CREATE POLICY "Les utilisateurs peuvent mettre à jour leur propre profil" ON profils
    FOR UPDATE USING (auth.uid() = id);

-- Politique pour permettre l'insertion lors de l'inscription
CREATE POLICY "Permettre l'insertion lors de l'inscription" ON profils
    FOR INSERT WITH CHECK (auth.uid() = id);

-- Fonction pour créer automatiquement un profil lors de l'inscription
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profils (id, email, nom, prenom)
    VALUES (
        NEW.id,
        NEW.email,
        COALESCE(NEW.raw_user_meta_data->>'nom', ''),
        COALESCE(NEW.raw_user_meta_data->>'prenom', '')
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger pour créer automatiquement un profil lors de l'inscription
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Commentaires pour documenter la table
COMMENT ON TABLE profils IS 'Table des profils utilisateur avec informations personnelles';
COMMENT ON COLUMN profils.id IS 'ID utilisateur (référence vers auth.users)';
COMMENT ON COLUMN profils.email IS 'Adresse email de l''utilisateur';
COMMENT ON COLUMN profils.nom IS 'Nom de famille';
COMMENT ON COLUMN profils.prenom IS 'Prénom';
COMMENT ON COLUMN profils.telephone IS 'Numéro de téléphone';
COMMENT ON COLUMN profils.date_naissance IS 'Date de naissance';
COMMENT ON COLUMN profils.profession IS 'Profession de l''utilisateur';
COMMENT ON COLUMN profils.accepter_newsletter IS 'Accepte de recevoir la newsletter';
COMMENT ON COLUMN profils.actif IS 'Compte actif ou désactivé';