import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeService {
  // recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Taco',
      'Homemade taco',
      'http://az616578.vo.msecnd.net/files/2016/07/18/636044104859117199985990752_tacos.jpg',
      [
        new Ingredient('Ground beef', 1),
        new Ingredient('Taco shell', 4),
        new Ingredient('Onion', 1),
        new Ingredient('Cilantro', 1),
        new Ingredient('Leek', 1),
        new Ingredient('Sour Cream', 1)
      ]
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number): Recipe {
    return this.recipes[id];
  }

}
