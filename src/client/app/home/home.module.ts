import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { RecipeService } from '../shared/recipe/recipe.service';

@NgModule({
  imports: [CommonModule, SharedModule, HomeRoutingModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
  providers: [RecipeService]
})
export class HomeModule { }
