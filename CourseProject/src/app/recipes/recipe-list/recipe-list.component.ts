import { Component, OnInit } from '@angular/core';
import * as path from 'path';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipies: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply test', 'assets/img/pizza_recipe.jpeg'),
    new Recipe('A Test Recipe', 'This is simply test', 'assets/img/pizza_recipe.jpeg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
