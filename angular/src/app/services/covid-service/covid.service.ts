import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CovidService {
  baseUrl = 'https://api.covid19api.com';

  constructor(
    private http: HttpClient
  ) { }

  async getCountries() {
    return await this.http.get(this.baseUrl + '/countries');
  }

  async getByCountry(code, status) {
    return await this.http.get(this.baseUrl + `/country/${ code }/status/${ status }`)
  }
}
