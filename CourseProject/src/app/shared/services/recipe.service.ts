import { EventEmitter } from "@angular/core";
import { Recipe } from "src/app/recipes/recipe.model";

export class RecipeService{
    
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe 1', 'This is simply test', 'assets/img/pizza_recipe.jpeg'),
        new Recipe('A Test Recipe 2', 'This is simply test', 'assets/img/pizza_recipe.jpeg'),
    ];

    getRecipies(){
        return this.recipes.slice();
    }

}