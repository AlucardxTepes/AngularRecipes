import {Injectable} from '@angular/core';
import {RecipeService} from '../recipes/recipe.service';
import 'rxjs/add/operator/map';
import {Recipe} from '../recipes/recipe.model';
import {AuthService} from '../auth/auth.service';
import {HttpClient, HttpParams, HttpRequest} from '@angular/common/http';

@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) {
  }

  storeRecipes() {
    // return this.http.put('https://angular-http-test-60147.firebaseio.com/recipes.json', this.recipeService.getRecipes(),
    //   {
    //     observe: 'body',
    //     params: new HttpParams().set('auth', token)
    //     // headers: headers
    //   });
    const req = new HttpRequest('PUT', 'https://angular-http-test-60147.firebaseio.com/recipes.json', this.recipeService.getRecipes());
      // {reportProgress: true, params: new HttpParams().set('auth', token)}
    return this.http.request(req);
  }

  getRecipes() {
    return this.http.get<Recipe[]>('https://angular-http-test-60147.firebaseio.com/recipes.json')
      // {params: new HttpParams().set('auth', token)})
      .map(
        (recipes: Recipe[]) => {
          // avoid null recipes array
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
