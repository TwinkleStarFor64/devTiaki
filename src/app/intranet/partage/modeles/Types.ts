export interface PlatI {
  nom: string;
  description: string;
  ingredient: Array<IngredientI>;
}
export interface IngredientI {
  nom: string;
}
export interface ExerciceI {
  title: string;
  photo: string;
  description: string;
  dureeIcon: string;
  duree: string;
  materielIcon: string;
  materiel: string;
}
export interface AsideI {
  nom?: string;
  image: string;
  url: string;
}
//Interface de la page Journal
export interface HistoriqueJournalI {
  id: number;
  date: string;
  objet: string;
  description: string;
  commentaire: string;
  groupeEvenement: {
    id: number;
  };
  linkedJournals?: HistoriqueJournalI[];
}
// Interface Message
export interface HistoriqueMessageI {
  id: number;
  date: string;
  medecin: string;
  activite: string;
  objet: string;
  echange: string;
  groupeMessage: {
    id: number;
  };
  linkedMessage?: HistoriqueMessageI[];
}

//Interface de la page historique des journaux
export interface HistoriqueI {
  //journal:Array<JournalI>
}
// Interface de la page journal pour les réalisations
export interface RealisationI {
  nom: string;
}
//Interface de la page journal pour les Medecins
export interface MedecinI {
  nom: string;
}
//Interface de la page journal
export interface RelierI {
  nom: string;
}
//Interface de la page historique des journaux
export interface HistoriqueI {
  // journal: Array<JournalI>
}
// Interface de la page journal pour les réalisations
export interface RealisationI {
  nom: string;
}
//Interface de la page journal pour les Medecins
export interface MedecinI {
  nom: string;
}
//Interface de la page journal
export interface RelierI {
  nom: string;
}
//Interface des Recettes
export interface RecetteI {
  photo: string;
  titre: string;
  preparationFig: string;
  preparationTxt: string;
  ingredientsFig: string;
  ingredientsTxt: string;
  valeurFig: string;
  valeurTxt: string;
  complexiteFig: string;
  complexiteTxt: string;
}

//Interface de la page d'accueil Nutrition
export interface NutritionI {
  id:number;
  title: string;
  text: string;
  button: string;
  image: string;
  url: string;
}
export interface MessageJournalI {
  severity: string;
  summary: string;
  detail: string;
}
// Interface pour les cards de l'accueil
export interface AccueilI {
  id:number;
  title:string;
  text:string;
  button:string;
  image:string;
  url:string;
}

// Interface pour la page profil(exemple)
export interface ProfilI {
  nom: string;
  prenom: string;
  age: string;
  email: string;
  adresse: string;
}
// Interface pour la page ingrédient de la table Ciqual
export interface CiqualI {
  id?:number,
  alim_code: number;
  alim_nom_fr: string;
  ['Protéines, N x 6.25 (g/100 g)']: string;
  ['Glucides (g/100 g)']: string;
  ['Lipides (g/100 g)']: string;
  ['Sucres (g/100 g)']: string;
  ['Vitamine C (mg/100 g)']: string;
  ['Vitamine B1 ou Thiamine (mg/100 g)']: string;
  ['Vitamine B2 ou Riboflavine (mg/100 g)']: string;
  ['Vitamine B3 ou PP ou Niacine (mg/100 g)']: string;
  ['Vitamine B5 ou Acide pantothénique (mg/100 g)']: string;
  ['Magnésium (mg/100 g)']: string;
  ['Potassium (mg/100 g)']: string;
  ['Cuivre (mg/100 g)']: string;
  ['Manganèse (mg/100 g)']: string;
}
// Interface pour les pages programmes
export interface ProgrammeI {
  photo?: string;
  video?: string;
  titre: string;
  description: string;
  duree: string;
  materiel: string;
}
// interface pour la page plat
export interface MesPlatsI {
  id: number;
  nom: string;
  description: string;
  alim_code: number;
  statut: string;
  reaction?: string;
}
// interface pour
export interface MesMenusI {
  id: number;
  nom: string;
  description: string;
  alim_code: number;
  statut: string;
  //ciqual: number;
}

export interface EvaluationI {
  id: number;
  statut: string;
}
export interface BottomI {
  image: string;
  titre: string;
  info: string;
  lien: string;
  url: string;
  active: boolean;
  activeUrl?: string;
}
// Interface bottomBar Tableau de bord & Profil
export interface BottomBarTableau {
  titre: string;
  firstInfo: string;
  secondInfo: string;
}
export interface EchangeI {
  nom: string;
  message: string;
}
export interface TableauEnCoursI {
  exerciceEnCours: string;
  progressionOpto: string;
  progressionNutri: string;
}

export interface TableauBordHistoriqueI {
  histoNutri: string;
  histoKine: string;
  histoOpto: string;
  active: boolean;
}
export interface TableauBordMedecinI {
  medecinNutri: string;
  general: string;
  medecinOpto: string;
  active: boolean;
}
export interface TableauBordProblemeI {
  problemeNutri: string;
  problemeKine: string;
  problemeOpto: string;
  active: boolean;
}
export interface TableauReussiteI {
  totalExercice: string;
  exerciceOptoReussi: string;
  exerciceKineReussi: string;
  repasNutri: string;
}
export interface OrganismeI {
  nomOrganisme: string;
}

export interface SanteI {
  img: string;
  nom: string;
}
