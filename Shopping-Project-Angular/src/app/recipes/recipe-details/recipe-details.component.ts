import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  // @ts-ignore
  recipe: Recipe;
  // @ts-ignore
  id: number;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'.toString()];
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    );
  }

  // tslint:disable-next-line:typedef
  onAddToShoppingList() {
    // @ts-ignore
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
  // tslint:disable-next-line:typedef
  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

}
