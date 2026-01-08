import { Injectable } from '@angular/core';
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { AccueilI, ExerciceI, NutritionI } from '../../intranet/modeles/Types';

@Injectable({
  providedIn: 'root',
})
export class SanityService {
  /** Paramètre des requêtes dans Sanity */
  sanityClientCredentials = {
    option: sanityClient({
      projectId: 'hrks9ngu',
      dataset: 'production',
    }),
  };
  /** Convertir les images avec la méthode de Sanity */
  urlFor = (source: any) =>
    imageUrlBuilder(this.sanityClientCredentials.option).image(source);

  /** photos ou videos des exercices Kine */
  async getExercices(): Promise<ExerciceI[]> {
    return await this.sanityClientCredentials.option.fetch(
      `*[_type == "exercice"]{
        title,
        photo,
        video,
        description,
        dureeIcon,
        duree,
        materielIcon,
        materiel
      }`
    );
  }
  /** Requète des photos et vidéos des exercices opto */
  async getExercicesOpto(): Promise<ExerciceI[]> {
    return await this.sanityClientCredentials.option.fetch(
      `*[_type == "exerciceOpto"]{
        title,
        photo,
        video,
        description,
        dureeIcon,
        duree,
        materielIcon,
        materiel
      }`
    );
  }
  /** Requète pour récupérer les photos de la page d'accueil */
  async getAccueil(): Promise<AccueilI[]> {
    return await this.sanityClientCredentials.option.fetch(
      `*[_type == "accueil"]{
        id,
        title,
        text,
        button,
        image,
        url
      }`
    );
  }
  /** photos page d'accueil nutrition */
  async getAccueilNutrition(): Promise<NutritionI[]> {
    return await this.sanityClientCredentials.option.fetch(
      `*[_type == "nutrition"]{
        id,
        title,
        text,
        button,
        image,
        url
      }`
    );
  }
  /** photos page d'accueil opto */
  async getAccueilOpto(): Promise<AccueilI[]> {
    return await this.sanityClientCredentials.option.fetch(
      `*[_type == "opto"]{
        id,
        title,
        text,
        button,
        image,
        url
      }`
    );
  }
  /** photos page d'accueil kine */
  async getAccueilKine(): Promise<AccueilI[]> {
    return await this.sanityClientCredentials.option.fetch(
      `*[_type == "kine"]{
        id,
        title,
        text,
        button,
        image,
        url
      }`
    );
  }
}
