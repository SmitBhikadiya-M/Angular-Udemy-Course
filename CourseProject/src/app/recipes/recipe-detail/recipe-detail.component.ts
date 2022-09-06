import { Component, Input, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/shared/services/shopping-list.service';
import { Recipe } from '../../shared/models/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddToShoppingList(){
    this.shoppingService.addIngredients(this.recipe.ingredients);
  }

}
