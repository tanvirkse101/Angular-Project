import {Component, ElementRef, OnInit, ViewChild, EventEmitter, Output} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef | undefined;
  @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef | undefined;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onAddItem() {
    // @ts-ignore
    const ingName = this.nameInputRef.nativeElement.value;
    // @ts-ignore
    const inAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, inAmount);
    this.ingredientAdded.emit(newIngredient);
  }
}
