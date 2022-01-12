import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MonitoringDetailsComponent } from './Components/monitoring-details/monitoring-details.component';
import { environment } from 'src/environments/environment';
import { RamChartComponent } from './Components/ram-chart/ram-chart.component';
import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';

PlotlyModule.plotlyjs = PlotlyJS;
@NgModule({
  declarations: [AppComponent, MonitoringDetailsComponent, RamChartComponent],
  imports: [BrowserModule, HttpClientModule, PlotlyModule],
  providers: [...environment.providers],
  bootstrap: [AppComponent],
})
export class AppModule {}
