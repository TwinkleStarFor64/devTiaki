import { Ingredient } from './ingredient';

export interface Plat {
  nom: string;
  description: string;
  ingredient: Array<Ingredient>;
}
