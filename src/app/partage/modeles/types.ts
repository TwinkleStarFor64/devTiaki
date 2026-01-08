/** Modèle des actualités */
export interface ActualiteI {
    titre:string;
    image:ImageI;
    description?:string;
}
/** Modèle des images */
export interface ImageI {
    legende?:string;
    url:string;
    alt?:string;
}
/** Modèle aidant */
export interface AidantI {
  id: number;
  nom: string;
}
