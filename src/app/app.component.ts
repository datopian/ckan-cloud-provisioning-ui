import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  template: `
    <app-login-screen *ngIf='!this.api.authenticated'></app-login-screen>
    <app-workspace *ngIf='this.api.authenticated'></app-workspace>
  `,
  styles: [
    `
    `
  ]
})
export class AppComponent {
  constructor(private api: ApiService) {
  }
}
