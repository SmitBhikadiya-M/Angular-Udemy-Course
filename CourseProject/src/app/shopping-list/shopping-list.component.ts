import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/models/ingredient.model';
import { ShoppingListService } from '../shared/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  constructor(private shoppingService: ShoppingListService) {
    this.shoppingService.ingredientChanged.subscribe((data: Ingredient[])=>{
      this.ingredients = data;
    })
  }

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients();
  }

}
