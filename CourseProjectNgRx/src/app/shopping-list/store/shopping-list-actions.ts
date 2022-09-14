import { Action } from "@ngrx/store";
import { Ingredient } from "src/app/shared/models/ingredient.model";

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS'
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT'

export class AddIngredient implements Action{
  readonly type: string = ADD_INGREDIENT;
  constructor( public payload: Ingredient ){ }
}

export class AddIngredients implements Action{
  readonly type: string = ADD_INGREDIENTS;
  constructor( public payload: Ingredient[] ){ }
}

export class RemoveIngredient implements Action{
  readonly type: string = REMOVE_INGREDIENT;
  constructor( public payload: { } ){ }
}

export type ShoppingListActions = AddIngredient | AddIngredients
