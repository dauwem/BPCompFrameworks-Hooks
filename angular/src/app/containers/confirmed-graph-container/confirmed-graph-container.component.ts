import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

// services
import { GlobalsService } from '../../services/globals-service/globals.service';
import { CovidService } from '../../services/covid-service/covid.service';

@Component({
  selector: 'app-confirmed-graph-container',
  templateUrl: './confirmed-graph-container.component.html',
  styleUrls: ['./confirmed-graph-container.component.scss']
})
export class ConfirmedGraphContainer implements OnInit {
  public countries: Array<Object>;
  public showChart: Boolean = false;
  private countryCode: string = 'BE';
  public chart: any = [];
  private cases: Array<Number> = [];
  private dates: Array<any> = [];

  constructor(
    private globalsService: GlobalsService,
    private covidService: CovidService
  ) { }

  ngOnInit() { }

  // In ngOnInit, the value wasn't set before asking the value
  ngDoCheck() {
    this.countries = this.globalsService.getCountries();
  }

  async changeValueDropdown(country) { 
    if (country !== "default") {
      //this.increaseCount = 1;
      let countryValues = country.split(",");
      this.countryCode = countryValues[1];
      await (await this.covidService.getByCountry(countryValues[0], "confirmed")).subscribe(res => {
        this.createChart(res);
      });
      /* let chartData = {};
      stats.data.map(stat => {
        if (stat.Country !== "") {
          return (chartData[stat.Date.split("T")[0]] = stat.Cases);
        }
      });
      this.chartData = chartData;
      this.showChart = stats.data.length !== 0; */
    } else this.showChart = false;
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