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
  reaction?: string;
}
// interface pour
export interface MesMenusI {
  id: number;
  nom: string;
  description: string;
  alim_code: number;
  //ciqual: number;  
  reaction?: string;
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
}
export interface TableauBordMedecinI {
  medecinNutri: string;
  general: string;
  medecinOpto: string;
}
export interface TableauBordProblemeI {
  problemeNutri: string;
  problemeKine: string;
  problemeOpto: string;
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
