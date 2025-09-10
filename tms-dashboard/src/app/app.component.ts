import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h2>TMS Dashboard</h2>
    <dashboard></dashboard>
    <shipment-table></shipment-table>
  `
})
export class AppComponent {}
