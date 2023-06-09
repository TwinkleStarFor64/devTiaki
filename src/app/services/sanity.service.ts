import { Injectable } from '@angular/core';
import sanityClient from '@sanity/client';
import imageUrlBuilder from "@sanity/image-url";
import { ExerciceI, NutritionI } from '../intranet/modeles/Types';


@Injectable({
  providedIn: 'root'
})
export class SanityService {
  constructor() { }

  sanityClientCredentials = {
    option: sanityClient({
      projectId: "hrks9ngu",
      dataset: "production"
    })
  }

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


}