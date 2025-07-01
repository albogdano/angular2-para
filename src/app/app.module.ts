import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeService } from './recipe.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { CoreModule } from './core/core.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({ declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA], imports: [BrowserModule,
        AppRoutingModule,
        CoreModule,
        AboutModule,
        HomeModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })], providers: [RecipeService, provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
