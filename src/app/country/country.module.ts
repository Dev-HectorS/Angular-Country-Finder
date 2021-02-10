import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ViewCountryComponent } from './pages/view-country/view-country.component';
import { RouterModule } from '@angular/router';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { CountryInputComponent } from './components/country-input/country-input.component';



@NgModule({
  declarations: [
    ByCapitalComponent,
    ByRegionComponent,
    ByCountryComponent,
    ViewCountryComponent,
    CountryTableComponent,
    CountryInputComponent
  ],
  exports: [
    ByCapitalComponent,
    ByRegionComponent,
    ByCountryComponent,
    ViewCountryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class CountryModule { }
