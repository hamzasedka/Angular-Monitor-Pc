import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MonitoringDetailsComponent } from './Components/monitoring-details/monitoring-details.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent, MonitoringDetailsComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [...environment.providers],
  bootstrap: [AppComponent],
})
export class AppModule {}
