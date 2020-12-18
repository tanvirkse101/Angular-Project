import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs';

export class ShoppingListService {

  ingredientsChanged = new Subject<Ingredient>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  // tslint:disable-next-line:typedef
  getIngredients() {
    return this.ingredients.slice();
  }

  // tslint:disable-next-line:typedef
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    // @ts-ignore
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  // tslint:disable-next-line:typedef
  addIngredients(ingredients: Ingredient[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.ingredients.push(...ingredients);
    // @ts-ignore
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
