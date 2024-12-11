import { Ingredient } from "./ingredient.model";

export interface Pizza {
    id:number;
    name: string;
    ingredients: Ingredient[];
    description: string;
    price: number;
    image: string;
    unavailable?:boolean;
}
