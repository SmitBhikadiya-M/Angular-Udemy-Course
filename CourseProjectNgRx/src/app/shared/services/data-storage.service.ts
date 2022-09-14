import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { exhaustMap, map, take, tap } from "rxjs";
import { AuthService } from "src/app/auth/auth.service";
import { Recipe } from "../models/recipe.model";
import { RecipeService } from "./recipe.service";

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {

    private recipeApiUrl = 'https://ng-racipe-book-project-default-rtdb.firebaseio.com/';

    constructor(
        private http: HttpClient,
        private recipeService: RecipeService,
        private authService: AuthService
    ) { }

    storeRecipes() {
        const recipes = this.recipeService.getRecipies();
        this.http.put(`${this.recipeApiUrl}/recipes.json`, recipes).subscribe({
            next: (res) => {
                console.log("Successfully Stored!! " + res);
            },
            error: (err) => {
                console.log("Somthing went wrong!! " + err);
            },
            complete: () => {
                console.log("Request Completed");
            }
        });
    }

    fetchRecipes() {
        return this.http.get<Recipe[]>(
            `${this.recipeApiUrl}/recipes.json`
        ).pipe(
            map((recipes: Recipe[]) => {
                return recipes.map((recipe) => {
                    return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] }
                });
            }),
            tap((recipes: Recipe[]) => {
                this.recipeService.setFetchedRecipe(recipes);
            })
        );
    }
}