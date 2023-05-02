//Interface de la page plat 
export interface PlatI {
    nom: string;
    description: string;
    ingredient: Array<IngredientI>;
}
//Interface de la page Menu
/* export interface MenuI {
  title:string,
  description:string,
  plat:Array<PlatI>,
  ingredient:Array<IngredientI>
}  */
//Interface de la page Ingrédient
export interface IngredientI {
    nom: string,

}

//Interface des exercices servant à l'optométrie et kinésithérapie
export interface ExerciceI {
    photo: string,
    titre: string,
    description: string,
    horloge: string,
    materiel: string
}
//Interface de la bottom bar servant à naviguer sur les pages de chaque application
export interface BottomI {
    image: string,
    titre: string,
    info: string,
    lien: string,
    url: string,
    active: boolean,
    activeUrl?: string;
  }
 //Interface de l'aside-bar servant à naviguer sur l'application
 export interface AsideI {
    nom?:string,
    image:string,
    url:string
 } 
 //Interface de la page Journal 
 export interface HistoriqueJournalI {
     id: number,
     date:string,
     objet:string,
     description:string,
     commentaire:string,     
     groupeEvenement: {
        id: number 
     },
     linkedJournals?: HistoriqueJournalI[],
 }
 
 //Interface de la page historique des journaux
 export interface HistoriqueI {
     //journal:Array<JournalI>
 }
 // Interface de la page journal pour les réalisations
 export interface RealisationI{
     nom:string
  }
  //Interface de la page journal pour les Medecins
  export interface MedecinI{
     nom:string
  }
  //Interface de la page journal 
  export interface RelierI{
     nom:string
  }
}
//Interface de l'aside-bar servant à naviguer sur l'application
export interface AsideI {
    nom?: string,
    image: string,
    url: string
}
//Interface de la page Journal 
export interface HistoriqueJournalI {
    id?: number,
    date:Date,
    objet:string,
    description:string,
    commentaire:string,
    //journalPrecedent:Array<HistoriqueI>
}
//Interface de la page historique des journaux
export interface HistoriqueI {
    // journal: Array<JournalI>
}
// Interface de la page journal pour les réalisations
export interface RealisationI {
    nom: string
}
//Interface de la page journal pour les Medecins
export interface MedecinI {
    nom: string
}
//Interface de la page journal 
export interface RelierI {
    nom: string
}
//Interface des Recettes 
export interface RecetteI {
    photo:string,
    titre:string,
    preparationFig:string,
    preparationTxt:string
    ingredientsFig:string
    ingredientsTxt:string
    valeurFig:string
    valeurTxt:string
    complexiteFig:string
    complexiteTxt:string
}