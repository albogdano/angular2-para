import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  imports: [RouterModule],
  declarations: [NavbarComponent, ToolbarComponent],
  exports: [RouterModule, NavbarComponent, ToolbarComponent]
})
export class CoreModule { }
