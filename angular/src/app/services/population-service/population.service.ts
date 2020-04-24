import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PopulationService {
  private baseURL = 'https://countries-cities.p.rapidapi.com/location/country';
  private headers = {};

  constructor(private http: HttpClient) { 
    this.headers = new HttpHeaders({
      'X-RapidAPI-Host': 'countries-cities.p.rapidapi.com',
      'x-rapidapi-key': 'd6fa298845mshed68005e79a9571p17ff78jsn5f1d7584a412'
    });
  }

  async getPopulation(code) {
    let res = await this.http.get<any>(this.baseURL + `/${ code }`, { headers: this.headers }).toPromise();
    return res.population;
  }
}
