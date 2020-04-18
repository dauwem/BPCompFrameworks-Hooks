import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// containers
import { ConfirmedGraphContainer } from './containers/confirmed-graph-container/confirmed-graph-container.component';
import { CuredGraphContainer } from './containers/cured-graph-container/cured-graph-container.component';
import { DeadGraphContainer } from './containers/dead-graph-container/dead-graph-container.component';
import { MainContainer } from './containers/main-container/main-container.component';

// components
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MainButtonComponent } from './components/main-button/main-button.component';
import { MainDropdownComponent } from './components/main-dropdown/main-dropdown.component';
import { Title02Component } from './components/title02/title02.component';
import { Title03Component } from './components/title03/title03.component';

// global services
import { CovidService } from './services/covid-service/covid.service';
import { GlobalsService } from './services/globals-service/globals.service';

@NgModule({
  declarations: [
    AppComponent,
    
    // containers
    ConfirmedGraphContainer,
    CuredGraphContainer,
    DeadGraphContainer,
    MainContainer,
    
    // components
    MainHeaderComponent,
    Title02Component,
    MainDropdownComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CovidService,
    GlobalsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
