import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
        margin-bottom: 5px;
      }
    `
  ]
})
export class ByRegionComponent implements OnInit {

  regions: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  regionActive: string = '';
  countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
  }

  getActiveRegionClass(region: string) {
    return (region === this.regionActive) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  selectRegion(region: string) {
    if (region === this.regionActive) { return }

    this.regionActive = region;
    this.countryService.searchRegion(this.regionActive)
      .subscribe((countries) => {
        this.countries = countries;
      });
  }
}
