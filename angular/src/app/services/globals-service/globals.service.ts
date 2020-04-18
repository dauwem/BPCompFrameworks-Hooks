import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {
  private countries = null;

  constructor() { }

  setCountries(countries) {
    this.countries = countries;
  }

  getCountries() {
    return this.countries;
  }
}
