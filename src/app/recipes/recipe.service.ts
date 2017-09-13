import {Recipe} from './recipe.model';
import {Subject} from 'rxjs/Subject';

export class RecipeService {
  onRecipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [ new Recipe('test', 'description', 'https://i.vimeocdn.com/portrait/58832_300x300', null)];

  getRecipes() {
    return this.recipes.slice();
  }

  setRecipes(newRecipes: Recipe[]) {
    this.recipes = newRecipes;
    this.onRecipesChanged.next(this.recipes.slice());
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
