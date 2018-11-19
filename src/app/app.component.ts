import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  template: `
    <app-login-screen *ngIf='this.api.providers'></app-login-screen>
    <app-workspace *ngIf='!this.api.providers'></app-workspace>
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
