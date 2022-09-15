import { Injectable, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Subject } from "rxjs";
import { Ingredient } from "../models/ingredient.model";
import { Recipe } from "../models/recipe.model";

@Injectable({
    providedIn: 'root'
})
export class RecipeService{

    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [];

    setFetchedRecipe(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipies() {
        return this.recipes.slice();
    }

    getRecipeById(id: number) {
        return this.recipes.find((recipe) => {
            return recipe.id === id;
        });
    }


    addRecipe(newRecipe: Recipe) {
        newRecipe.id = this.recipes.length+1;
        this.recipes.push(newRecipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(id: number, newRecipe: Recipe) {
        this.recipes = this.recipes.map((recipe)=>{
            if(recipe.id === id){
                return newRecipe;
            }
            return recipe;
        });
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(id: number){
        this.recipes = this.recipes.filter((recipe:Recipe)=>(recipe.id !== +id));
        this.recipesChanged.next(this.recipes.slice());
    }

}
