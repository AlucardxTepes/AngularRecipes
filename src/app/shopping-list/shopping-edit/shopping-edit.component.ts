import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  addIngredientForm: FormGroup;
  editSubscription: Subscription;
  editItemIndex: number;
  editMode: boolean;
  editItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit(): void {
    this.addIngredientForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null, [Validators.required, Validators.pattern('^[1-9]+[0-9]*$')])
    });
    // subscribe to ingredient list items clicks
    this.editSubscription = this.shoppingListService.startedEditing.subscribe(
      (ingredientIndex: number) => {
        this.editItemIndex = ingredientIndex;
        this.editMode = true;
        this.editItem = this.shoppingListService.getIngredient(ingredientIndex);
        this.addIngredientForm.setValue({
          'name': this.editItem.name,
          'amount': this.editItem.amount
        });
      }
    );
  }

  onSubmit() {
    if (this.addIngredientForm.valid) {
      if (this.editMode) {
        console.log(this.editItem);
        this.shoppingListService.update(this.editItemIndex,
          new Ingredient(this.addIngredientForm.get('name').value, this.addIngredientForm.get('amount').value));
      } else {
        this.shoppingListService.create(new Ingredient(
          this.addIngredientForm.get('name').value,
          Number.parseInt(this.addIngredientForm.get('amount').value)
        ));
      }
      this.addIngredientForm.reset();
    } else {
      alert('invalid info');
    }
  }

  onDeleteClicked() {
    if (this.editMode) {
      this.shoppingListService.delete(this.editItemIndex);
      this.addIngredientForm.reset();
      this.editMode = false;
    } else {
      alert('Please select an item first');
    }
  }

  onClearClicked() {
    this.addIngredientForm.reset();
    this.editMode = false;
  }

}
