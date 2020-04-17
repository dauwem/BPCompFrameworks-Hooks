import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// containers
import { ConfirmedGraphContainer } from './containers/confirmed-graph-container/confirmed-graph-container.component';
import { CuredGraphContainer } from './containers/cured-graph-container/cured-graph-container.component';
import { DeadGraphContainer } from './containers/dead-graph-container/dead-graph-container.component';

// components
import { HeaderComponent } from './components/header/header.component';
import { MainButtonComponent } from './components/main-button/main-button.component';
import { MainChartComponent } from './components/main-chart/main-chart.component';
import { MainDropdownComponent } from './components/main-dropdown/main-dropdown.component';
import { Title02Component } from './components/title02/title02.component';
import { Title03Component } from './components/title03/title03.component';

@NgModule({
  declarations: [
    AppComponent,
    
    // containers
    ConfirmedGraphContainer,
    CuredGraphContainer,
    DeadGraphContainer,
    HeaderComponent,
    MainButtonComponent,
    MainChartComponent,
    MainDropdownComponent,
    Title02Component,
    Title03Component,

    // components
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
