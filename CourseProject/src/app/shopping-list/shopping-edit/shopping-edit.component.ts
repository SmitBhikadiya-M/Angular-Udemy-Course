import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { ShoppingListService } from 'src/app/shared/services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('ngform', { static: false }) ngform: NgForm;
  editMode: boolean = false;
  editItemIndex: number;
  editedItem: Ingredient;
  editingSubscription: Subscription;

  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit(): void {
    this.editingSubscription = this.shoppingService.startedEditing.subscribe((index: number)=>{
      this.editMode = true;
      this.editItemIndex = index;
      this.editedItem = this.shoppingService.getIngredient(index);
      this.ngform.setValue({
        'name': this.editedItem.name,
        'amount': this.editedItem.amount
      })
    });
  }

  ngOnDestroy(): void {
    this.editingSubscription.unsubscribe();
  }

  onSubmitItem(){
    const ingredient = new Ingredient(
      this.ngform.value.name,
      this.ngform.value.amount
    );
    if(this.editMode){
      this.shoppingService.updateIngredient(this.editItemIndex, ingredient)
    }else{
      this.shoppingService.addIngredient(ingredient);
    }
    this.editItemIndex = null;
    this.editMode = false;
    this.ngform.reset();
  }

  onDelete(){
    this.shoppingService.deleteIngredient(this.editItemIndex);
    this.onClearForm();
  }

  onClearForm(){
    this.editMode = false;
    this.editItemIndex = null;
    this.ngform.reset();
  }

}
