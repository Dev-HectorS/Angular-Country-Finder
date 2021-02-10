import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})
export class ByCapitalComponent implements OnInit {

  searchText: string = '';
  found: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
  }

  search(searchText: string) {
    this.found = false;
    this.searchText = searchText;
    this.countryService.searchCapital(this.searchText)
      .subscribe((resp: any) => {
        this.countries = resp;
      }, (err) => {
        this.found = true;
        this.countries = [];
      });
  }

}
