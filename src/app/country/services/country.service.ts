import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = 'https://restcountries.eu/rest/v2';

  get params() {
    return new HttpParams().set('fields', 'name;capital;alpha2Code;flag;population')
  }

  constructor(private http: HttpClient) { }

  searchCountry(searchTxt: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${searchTxt}`
    return this.http.get<Country[]>(url, { params: this.params });
  }

  searchCapital(searchTxt: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${searchTxt}`
    return this.http.get<Country[]>(url, { params: this.params });
  }

  searchRegion(region: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`
    return this.http.get<Country[]>(url, { params: this.params });
  }

  getCountryID(id: string): Observable<Country[]> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country[]>(url);
  }

}
