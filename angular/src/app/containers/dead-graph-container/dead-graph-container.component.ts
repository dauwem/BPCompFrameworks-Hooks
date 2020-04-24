import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

// services
import { GlobalsService } from '../../services/globals-service/globals.service';
import { CovidService } from '../../services/covid-service/covid.service';
import { PopulationService } from '../../services/population-service/population.service';

// classes
import { Population } from '../../classes/population/population';
import { Count } from '../../classes/count/count';

@Component({
  selector: 'app-dead-graph-container',
  templateUrl: './dead-graph-container.component.html',
  styleUrls: ['./dead-graph-container.component.scss']
})
export class DeadGraphContainer implements OnInit {
  public countries: Array<Object>;
  public showChart: Boolean = false;
  private countryCode: string = 'BE';
  public chart: any = [];
  private cases: Array<Number> = [];
  private dates: Array<any> = [];
  public population: number;
  public count: number = 0;
  private countInstance: Count;

  constructor(
    private globalsService: GlobalsService,
    private covidService: CovidService,
    private populationService: PopulationService
  ) { 
    this.countInstance = new Count();
  }

  ngOnInit() { }

  // In ngOnInit, the value wasn't set before asking the value
  ngDoCheck() {
    this.countries = this.globalsService.getCountries();
  }

  async changeValueDropdown(country) { 
    if (country !== "default") {
      this.count = this.countInstance.increaseCount();
      let countryValues = country.split(",");
      this.countryCode = countryValues[1];
      await (await this.covidService.getByCountry(countryValues[0], "deaths")).subscribe(res => {
        this.createChart(res);
      });
      let populationInstance = new Population(this.populationService);
      this.population = await populationInstance.getPopulation(this.countryCode);
    } else this.showChart = false;
  }

  removeCount() {
    this.count = this.countInstance.decreaseCount();
  }

  createChart(data) {
    if (this.chart.length !== 0) this.chart.destroy();
    this.cases = [];
    this.dates = [];
    data.map(item => {
      this.cases.push(item.Cases);
      this.dates.push(item.Date.split('T')[0]);
    });
    if (data.length !== 0) {
      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: this.dates,
          datasets: [
            {
              data: this.cases,
              borderColor: '#9E2C29',
              fill: false
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }],
          }
        }
      });
    }
    else {
      this.chart = [];
    }
  }
}
