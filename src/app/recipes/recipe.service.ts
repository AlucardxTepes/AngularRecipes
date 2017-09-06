import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Taco', 'Homemade taco', 'http://az616578.vo.msecnd.net/files/2016/07/18/636044104859117199985990752_tacos.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }

}
