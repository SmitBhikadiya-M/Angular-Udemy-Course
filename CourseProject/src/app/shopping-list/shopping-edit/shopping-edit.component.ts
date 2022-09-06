import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { ShoppingListService } from 'src/app/shared/services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputElem: ElementRef;
  @ViewChild('amountInput') amountInputElem: ElementRef;

  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit(): void {
  }
  addIngredients(){
    this.shoppingService.addIngredient(new Ingredient(
      this.nameInputElem.nativeElement.value,
      this.amountInputElem.nativeElement.value
    ));
  }

}
