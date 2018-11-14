import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecipeService } from './recipe/recipe.service';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
@NgModule({
  imports: [CommonModule],
  exports: [CommonModule, FormsModule]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [RecipeService]
    };
  }
}
