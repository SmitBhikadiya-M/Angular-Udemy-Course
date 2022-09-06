import { EventEmitter } from "@angular/core";
import { Ingredient } from "../models/ingredient.model";

export class ShoppingListService{

    ingredientChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Capsicum', 3),
      ];

      getIngredients(){
        return this.ingredients.slice();
      }

      addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientChanged.emit(this.ingredients.slice());
      }
}