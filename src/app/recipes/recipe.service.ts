import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs/Subject';

export class RecipeService {
  onRecipesChanged = new Subject<Recipe[]>();

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

  create(recipe: Recipe) {
    this.recipes.push(recipe);
    this.onRecipesChanged.next(this.recipes.slice());
  }

  update(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.onRecipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    console.log('delete ' + index);
    this.recipes.splice(index, 1);
    this.onRecipesChanged.next(this.recipes.slice());
  }

}
