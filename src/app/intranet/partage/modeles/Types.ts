export interface PlatI {
  id?:number;
  nom: string;
  description?: string;
  dureePreparation:number;
  dureeRepos:number;
  dureeCuisson:number;
  ingredients: Array<IngredientI>; // Ecrit quantiteIngredients dans la base
  note?:string;
}
export interface IngredientI {
  nom: string;
}
export interface ExerciceI {
  id?:number;
  titre: string;
  description: string;
  duree: string;
  media?: MediaI;
  photo?:string;
  materiels?: Array<MaterielI>;
}
export interface AsideI {
  nom?: string;
  image: string;
  url: string;
}
//Interface de la page Journal
export interface JournalI {
  id: number;
  date: string;
  objet: string;
  description?: string;
  notes?: Array<string>;
  groupeEvenement: { // Qu'est ce que c'est ?
    id: number;

  };
  linkedJournals?: JournalI[];
}
// Interface Message
export interface MessageI {
  id: number;
  date: string;
  therapeutes: Array<TherapeuteI>;
  activite: string;
  objet: string;
  echange: string;
  groupeMessage: {
    id: number;
  };
  linkedMessage?: MessageI[];
}
export interface EventI{
  date: number;
  titre: string;
  note?:string;
  observations?: string;
  importance?:ImportanceE;
  idMedecin?:number;
  idMenu?:number;
}
enum ImportanceE{
  faible = 'Faible',
  moyenne = 'Moyenne',
  forte = 'Forte',
  critique = 'Critique'
}
// Interface de la page journal pour les réalisations
export interface RealisationI {
  nom: string;
}
//Interface de la page journal pour les Medecins
export interface TherapeuteI {
  nom: string;
  prenom:string;
  adresse?:string;
  ville?:string;
  codePostal?:number;
  telephone?:string;
  mobile?:string;
  specialites:Array<string>;
  type:TypeTherapeute;
  notes?:Array<string>;
}
enum TypeTherapeute{
  infirmiere = 'infirmiere',
  medecin = 'generaliste',
  specialiste = 'specialiste',
  therapeute = 'therapeute'
}
interface AdresseI{
  adresse:string;
  ville:string;
  codePostal:number;
}
//Interface de la page journal
export interface RelierI {
  nom: string;
}
// Interface des Recettes // Quelle différence avec les plats ?
export interface RecetteI {
  id:number;
  photo: string;
  titre: string;
  preparationFig: string;
  preparationTxt: string;
  ingredientsFig: string;
  ingredientsTxt: string;
  valeurFig: string;
  valeurTxt: string;
  complexiteFig: string;
  complexiteTxt: string; // Ces points n'existent pas dans la base, ça serait intéressant de les considérer
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
  titre:string;
  description:string;
  bouton:string;
  image:string;
  url:string;
}
export interface AccueilModulesI {
  id?:number;
  titre:string;
  description:string;
  bouton:string;
  image:string;
  url:string;
}
// Interface pour la page profil(exemple)
export interface ProfilI {
  id:number;
  nom: string;
  prenom: string;
  dateNaissance?: number | string | Date;
  email?: string;
  telephone?:string;
  adresse?: string;
  ville?:string;
  codePostal?:number | string;
  journaux?:Array<JournalI>; // AJOUT DES JOURNAUX RECUS DEPUIS LA TABLE groupeEvenement (MCD)
  therapeutes?:Array<TherapeuteI>;
  progressions?:Array<ProgrammeI>; // La liste des programmes en cours de réalisation (sans distinction)
  nutrition?:any;
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
  id:number;
  photo?: string;
  video?: string;
  titre: string;
  description: string;
  duree: string;
  materiels: Array<string>;
  exercices:Array<ExerciceI>;
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
export interface TableauBordTherapeuteI {
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
export interface MaterielI{
  id:string;
  titre:string;
  description?:string;
  media?:MediaI;
}
export interface MediaI{
  id?:number;
  titre:string;
  url:string;
  description?:string;
  auteur?:string;
  type:string;
}
export interface ParamsI{
  app:Array<ParamI>;
}
export interface ParamI{
  titre:string;
  description:string;
  url:string;
}
