import { EventEmitter } from "@angular/core";
import { Ingredient } from "../models/ingredient.model";
import { Recipe } from "../models/recipe.model";

export class RecipeService{
    
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe 1', 'This is simply test', 'assets/img/pizza_recipe.jpeg', [
            new Ingredient('Meat', 1),
            new Ingredient('French Frices', 20)
        ]),
        new Recipe('A Test Recipe 2', 'This is simply test', 'assets/img/pizza_recipe.jpeg', [
            new Ingredient('Buns', 10),
            new Ingredient('eggs', 20)
        ]),
    ];

    getRecipies(){
        return this.recipes.slice();
    }

}