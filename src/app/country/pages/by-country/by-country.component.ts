import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
    li {
      cursor: pointer;
    }
    `
  ]
})
export class ByCountryComponent implements OnInit {

  searchText: string = '';
  found: boolean = false;
  countries: Country[] = [];
  suggestedCountries: Country[] = [];
  showSuggestion: boolean = false;

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
  }

  search(searchText: string) {
    this.showSuggestion = false;
    this.found = false;
    this.searchText = searchText;
    this.countryService.searchCountry(this.searchText)
      .subscribe((resp: any) => {
        this.countries = resp;
      }, (err) => {
        this.found = true;
        this.countries = [];
      });
  }

  suggestions(searchText: string) {
    this.showSuggestion = true;
    this.found = false;
    this.searchText = searchText;

    this.countryService.searchCountry(searchText)
      .subscribe(countries => {
        this.suggestedCountries = countries.splice(0, 5);
      },
        error => {
          this.suggestedCountries = [];
        })
  }


  searchSuggestion(searchText: string) {
    this.search(searchText);
  }
}
