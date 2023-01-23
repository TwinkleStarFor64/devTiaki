import { Ingredient } from "./ingredient";
import { Plat } from "./plat";

export interface Menu {
    title:string,
    description:string,
    plat:Array<Plat>,
    ingredient:Array<Ingredient>

}
