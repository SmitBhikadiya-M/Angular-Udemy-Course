import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/models/ingredient.model';
import { ShoppingListService } from '../shared/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  
  ingredients: Ingredient[];
  private igChangeSub: Subscription;

  constructor(private shoppingService: ShoppingListService) {}
  
  ngOnInit(): void {
    this.igChangeSub = this.shoppingService.ingredientChanged.subscribe((data: Ingredient[])=>{
      this.ingredients = data;
    })
    this.ingredients = this.shoppingService.getIngredients();
  }

  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }

}
