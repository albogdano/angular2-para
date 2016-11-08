import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../shared/recipe/index';

import * as marked from 'marked';

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

  newName: string;
  newRecipe: string;
  recipeId: string;
  recipesList: Array<any>;
  editMode = false;
  showForm = false;
  q: string;

  constructor(public recipeService: RecipeService) {
  }

  ngOnInit() {
    this.listRecipes();
  }

  listRecipes() {
    this.recipeService.get()
      .subscribe((data:any) => {
        this.recipesList = data.items;
      });
  }

  addRecipe(): boolean {
    if (this.recipeId) {
      this.recipesList.map((el) => {
        if (el.id === this.recipeId) {
          el.name = this.newName;
          el.text = this.newRecipe;
        }
      });
      this.recipeService.edit(this.recipeId, this.newName, this.newRecipe);
    } else {
      this.recipeService.add(this.newName, this.newRecipe)
        .subscribe((data: any) => {
          if (data) {
            this.recipesList.unshift(data);
          }
        });
    }
    this.clearForm();
    return false;
  }

  editRecipe(recipe: any) {
    this.editMode = true;
    this.showForm = true;
    this.recipeId = recipe.id;
    this.newName = recipe.name;
    this.newRecipe = recipe.text;
  }

  removeRecipe(id: string) {
    this.recipeService.remove(id);
    this.recipesList = this.recipesList.filter((el) => el.id !== id);
    this.clearForm();
  }

  clearForm(): boolean {
    this.showForm = false;
    this.editMode = false;
    this.recipeId = null;
    this.newName = '';
    this.newRecipe = '';
    return true;
  }

  md2html(text: string) {
    return marked(text || '');
  }

  search(): boolean {
    this.recipeService.search(this.q || '*').subscribe((data:any) => {
      if (data.items) {
        this.recipesList = data.items;
      }
    });
    return false;
  }

}
