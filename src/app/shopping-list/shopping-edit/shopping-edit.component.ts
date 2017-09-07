import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  constructor(private shoppingListService: ShoppingListService) { }

  onAddClicked(name: string, amount: string) {
    this.shoppingListService.create(new Ingredient(name, Number.parseInt(amount)));
  }

}
