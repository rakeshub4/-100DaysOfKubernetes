import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'dashboard',
  template: `
    <div *ngIf="stats">
      <div>Orders: {{stats.orders}}</div>
      <div>Shipments: {{stats.shipments}}</div>
      <div>Delayed: {{stats.delayed}}</div>
    </div>
  `
})
export class DashboardComponent implements OnInit {
  stats: any;
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get('/api/tms/stats').subscribe(data => this.stats = data);
  }
}
