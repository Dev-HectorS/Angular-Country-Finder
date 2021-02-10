import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ByCountryComponent } from './country/pages/by-country/by-country.component';
import { ByRegionComponent } from './country/pages/by-region/by-region.component';
import { ByCapitalComponent } from './country/pages/by-capital/by-capital.component';
import { ViewCountryComponent } from './country/pages/view-country/view-country.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: "full",
        component: ByCountryComponent
    },
    {
        path: 'region',
        component: ByRegionComponent
    },
    {
        path: 'capital',
        component: ByCapitalComponent
    },
    {
        path: 'country/:id',
        component: ViewCountryComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }