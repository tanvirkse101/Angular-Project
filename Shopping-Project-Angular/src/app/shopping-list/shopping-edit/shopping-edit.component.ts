import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef | undefined;
  @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef | undefined;

  constructor(private shoppingListService: ShoppingListService) {
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
    this.shoppingListService.addIngredient(newIngredient);
  }
}
