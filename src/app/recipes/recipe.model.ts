import {Ingredient} from '../shared/ingredient.model';
export class Recipe {

  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];

  constructor(name: string, description: string, imagePath: string) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
  }

  addIngredient(i: Ingredient) {
    this.ingredients.push(i);
  }
}
