import { Injectable } from '@angular/core';
import sanityClient from '@sanity/client';
import imageUrlBuilder from "@sanity/image-url";
import { ExerciceI } from '../intranet/modeles/Types';


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
        _id,
        title,
        photo,
        video,
        description,
        duree,
        materiel
      }`
    );
  }
}