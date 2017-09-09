import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {ActivatedRoute, Params} from '@angular/router';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private shoppingListService: ShoppingListService,
              private recipeService: RecipeService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = Number.parseInt(params['id']);
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    );
  }

  onAddIngredientsToShoppingList() {
    this.shoppingListService.addIngredients(this.recipe.ingredients);
  }

}
