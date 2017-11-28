import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [NavbarComponent, BreadcrumbComponent],
    exports: [NavbarComponent, BreadcrumbComponent]
})
export class SharedModule {
}
