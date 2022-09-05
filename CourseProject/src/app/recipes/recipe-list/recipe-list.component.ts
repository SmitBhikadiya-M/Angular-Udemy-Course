import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as path from 'path';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe 1', 'This is simply test', 'assets/img/pizza_recipe.jpeg'),
    new Recipe('A Test Recipe 2', 'This is simply test', 'assets/img/pizza_recipe.jpeg'),
  ];

  @Output() selectedRecipe = new EventEmitter<Recipe>(Recipe[0]);

  constructor() { }

  ngOnInit(): void {
  }

  emitedRecipe(e: Recipe){
    this.selectedRecipe.emit(e);
  }
}
