import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeService } from './recipe.service';
import { HttpClientModule } from '@angular/common/http';
import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { CoreModule } from './core/core.module';
import { APP_BASE_HREF } from '@angular/common';
import { environment as Config } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    AboutModule,
    HomeModule,
  ],
  providers: [RecipeService, { provide: APP_BASE_HREF, useValue: Config.base }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
