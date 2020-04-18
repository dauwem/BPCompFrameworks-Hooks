import { Component, OnInit } from '@angular/core';

// services
import { CovidService } from './services/covid-service/covid.service';
import { GlobalsService } from './services/globals-service/globals.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private covidService: CovidService,
    private globalsService: GlobalsService
  ) { }

  async ngOnInit() {
    await (await this.covidService.getCountries()).subscribe(res => 
      this.globalsService.setCountries(res)
    );
  }
}
