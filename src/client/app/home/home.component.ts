import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../shared/recipe/recipe.service';
import showdown from 'showdown';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})

export class HomeComponent implements OnInit {

  recipesList: Array<any>;
  createMode = false;
  q: string;
  editedRecipes: Map<string, boolean>;

  constructor(public recipeService: RecipeService) {
    this.editedRecipes = new Map<string, boolean>();
    this.recipesList = new Array();
  }

  /**
   * Get the names OnInit
   */
  ngOnInit() {
    this.listRecipes();
  }

  listRecipes() {
    this.recipeService.get()
      .subscribe((data: any) => {
        this.recipesList = data.items;
      });
  }

  addRecipe(recipe: any) {
    if (recipe && recipe.id) {
      this.recipeService.edit(recipe.id, recipe.name, recipe.text).subscribe();
    } else {
      this.recipeService.add(recipe.name, recipe.text)
        .subscribe((data: any) => {
          if (data) {
            if (this.createMode) {
              const first = this.recipesList.shift();
              this.recipesList.unshift(data);
              this.recipesList.unshift(first);
            } else {
              this.recipesList.unshift(data);
            }
          }
        });
    }
    this.closeForm(recipe.id);
  }

  editRecipe(recipe: any) {
    this.editedRecipes.set(recipe.id, true);
  }

  removeRecipe(id: string) {
    this.recipeService.remove(id).subscribe();
    this.recipesList = this.recipesList.filter((el) => el.id !== id);
  }

  newRecipeForm() {
    if (!this.createMode) {
      this.recipesList.unshift({name: '', text: ''});
      this.createMode = true;
    }
  }

  closeForm(recipeId: string) {
    if (recipeId) {
      this.editedRecipes.set(recipeId, false);
    } else if (this.createMode) {
      this.recipesList.shift();
      this.createMode = false;
    }
  }

  md2html(text: string): string {
    return new showdown.Converter().makeHtml(text || '');
  }

  search(): boolean {
    this.recipeService.search(this.q || '*').subscribe((data: any) => {
      if (data.items) {
        this.recipesList = data.items;
      }
    });
    return false;
  }

}
