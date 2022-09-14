import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../shared/services/recipe.service';
import { Recipe } from '../shared/models/recipe.model';
import { DataStorageService } from '../shared/services/data-storage.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent {

  selectedRecipe!:Recipe;

  constructor() { }
}
