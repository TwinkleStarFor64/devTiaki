export interface ActualiteI {
    titre:string;
    image:ImageI;
    description?:string;
}

export interface ImageI {
    legende?:string;
    url:string;
    alt?:string;
}
