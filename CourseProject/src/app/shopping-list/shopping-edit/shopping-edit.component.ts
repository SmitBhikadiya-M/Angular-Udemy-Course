import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputElem: ElementRef;
  @ViewChild('amountInput') amountInputElem: ElementRef;
  @Output() onAddIngeredient = new EventEmitter<{name: string, amount: string}>();

  constructor() { }

  ngOnInit(): void {
  }
  addIngredients(){
    this.onAddIngeredient.emit({
      name: this.nameInputElem.nativeElement.value,
      amount: this.amountInputElem.nativeElement.value
    });
  }

}
