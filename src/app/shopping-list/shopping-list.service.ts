import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs/Subject';

export class ShoppingListService {
  onIngredientListUpdated = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Onions', 3)
  ];

  create(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.onIngredientListUpdated.next(this.ingredients.slice());
  }

  update(index: number, ingredient: Ingredient) {
    this.ingredients[index] = ingredient;
    this.onIngredientListUpdated.next(this.ingredients.slice());
  }

  delete(index: number) {
    this.ingredients.splice(index, 1);
    this.onIngredientListUpdated.next(this.ingredients.slice());
  }

  getIngredient(ingredientIndex: number) {
    return this.ingredients[ingredientIndex];
  }

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredients(ingredients: Ingredient[]) {
    // this.ingredients = this.ingredients.concat(ingredients);
    this.ingredients.push(...ingredients);
    this.onIngredientListUpdated.next(this.ingredients.slice());
    console.log(this.ingredients);
  }

}
