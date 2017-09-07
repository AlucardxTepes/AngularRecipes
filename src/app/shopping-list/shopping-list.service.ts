import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {
  onIngredientListUpdated = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Onions', 3)
  ];

  create(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.onIngredientListUpdated.emit(this.ingredients.slice());
  }

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredients(ingredients: Ingredient[]) {
    // this.ingredients = this.ingredients.concat(ingredients);
    this.ingredients.push(...ingredients);
    this.onIngredientListUpdated.emit(this.ingredients.slice());
    console.log(this.ingredients);
  }
}
