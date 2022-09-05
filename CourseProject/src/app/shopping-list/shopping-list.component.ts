import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Capsicum', 3),
  ];
  constructor() { }

  ngOnInit(): void {
  }

  addIngredient(e: {name: string, amount:number}){
    this.ingredients.push(new Ingredient(e.name, e.amount));
  }

}
