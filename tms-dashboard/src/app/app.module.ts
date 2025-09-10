import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { ShipmentTableComponent } from './shipment-table.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent, ShipmentTableComponent],
  imports: [BrowserModule, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
