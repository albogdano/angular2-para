import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';

@NgModule({
    imports: [CommonModule, AboutRoutingModule],
    declarations: [AboutComponent],
    exports: [AboutComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AboutModule { }
