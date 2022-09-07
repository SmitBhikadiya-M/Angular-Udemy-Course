import { Injectable } from "@angular/core";
import { Ingredient } from "../models/ingredient.model";
import { Recipe } from "../models/recipe.model";

@Injectable()
export class RecipeService{
    
    private recipes: Recipe[] = [
        new Recipe(1, 'A Test Recipe 1', 'This is simply test', 'assets/img/pizza_recipe.jpeg', [
            new Ingredient('Meat', 1),
            new Ingredient('French Frices', 20)
        ]),
        new Recipe(2, 'A Test Recipe 2', 'This is simply test', 'assets/img/pizza_recipe.jpeg', [
            new Ingredient('Buns', 10),
            new Ingredient('eggs', 20)
        ]),
    ];

    getRecipies(){
        return this.recipes.slice();
    }

    getRecipeById(id: number){
        return this.recipes.find((recipe)=>{
            return recipe.id === id;
        });
    }

}