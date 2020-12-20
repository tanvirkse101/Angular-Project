import {Recipe} from './recipe.model';
import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super tasty Schnitzel',
      'https://upload.wikimedia.org/wikipedia/commons/b/bc/Wiener_Schnitzel_2012.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe(
      'Big Fat Burger',
      'Super juicy Burger',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Jumbo_Burger.jpg/800px-Jumbo_Burger.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1),
        new Ingredient('Cheese', 2)
      ])
  ];

  // tslint:disable-next-line:typedef
  getRecipes() {
    return this.recipes.slice();
  }

  constructor(private shoppingListService: ShoppingListService) {
  }

  // tslint:disable-next-line:typedef
  getRecipe(index: number) {
    return this.recipes[index];
  }

  // tslint:disable-next-line:typedef
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  // tslint:disable-next-line:typedef
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    // @ts-ignore
    this.recipesChanged.next(this.recipes.slice());
  }

  // tslint:disable-next-line:typedef
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    // @ts-ignore
    this.recipesChanged.next(this.recipes.slice());
  }

}
