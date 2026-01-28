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
export interface UserI{
    token?:string;
    role:string;
    email:string;
}
export interface TradI {
    routes:any;
    pages:any;
    nutrition:any;
    opto:any;
    kine:any;
}