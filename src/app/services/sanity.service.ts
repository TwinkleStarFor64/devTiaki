import { Injectable } from '@angular/core';
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { AccueilI, ExerciceI, NutritionI } from '../intranet/modeles/Types';

@Injectable({
  providedIn: 'root',
})
export class SanityService {
  constructor() {}

  sanityClientCredentials = {
    option: sanityClient({
      projectId: 'hrks9ngu',
      dataset: 'production',
    }),
  };

  urlFor = (source: any) =>
    imageUrlBuilder(this.sanityClientCredentials.option).image(source);

  async getExercices(): Promise<ExerciceI[]> {
    return await this.sanityClientCredentials.option.fetch(
      `*[_type == "exercice"]{
        title,
        photo,
        video,
        description,
        duree,
        materiel
      }`
    );
  }

  async getExercicesOpto(): Promise<ExerciceI[]> {
    return await this.sanityClientCredentials.option.fetch(
      `*[_type == "exerciceOpto"]{
        title,
        photo,
        video,
        description,
        duree,
        materiel
      }`
    );
  }
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
