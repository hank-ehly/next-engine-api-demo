import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { EndpointDetailComponent } from './endpoint-detail/endpoint-detail.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
    {
        path: '',
        component: WelcomeComponent
    },
    {
        path: 'endpoints/:id',
        component: EndpointDetailComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
