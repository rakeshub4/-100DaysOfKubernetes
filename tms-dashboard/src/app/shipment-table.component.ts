import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'shipment-table',
  template: `
    <table>
      <tr><th>ID</th><th>Status</th><th>ETA</th></tr>
      <tr *ngFor="let s of shipments">
        <td>{{s.id}}</td>
        <td>{{s.status}}</td>
        <td>{{s.eta}}</td>
      </tr>
    </table>
  `
})
export class ShipmentTableComponent implements OnInit {
  shipments: any[] = [];
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get<any[]>('/api/tms/shipments').subscribe(data => this.shipments = data);
  }
}
