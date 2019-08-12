import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { RecipeService } from '../recipe.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, HomeRoutingModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
  providers: [RecipeService]
})
export class HomeModule { }
