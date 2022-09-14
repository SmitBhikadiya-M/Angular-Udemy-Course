import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoggingService } from '../logging.service';
import { Ingredient } from '../shared/models/ingredient.model';
import { ShoppingListService } from '../shared/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[];
  private igChangeSub: Subscription;

  constructor(
    private shoppingService: ShoppingListService,
    private loggingService: LoggingService
    ) {}

  ngOnInit(): void {
    this.igChangeSub = this.shoppingService.ingredientChanged.subscribe((data: Ingredient[])=>{
      this.ingredients = data;
    })
    this.ingredients = this.shoppingService.getIngredients();

    this.loggingService.printLog("Calling From Shopping List Component");
  }

  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }

  onEditItem(index: number){
    this.shoppingService.startedEditing.next(index);
  }

}
