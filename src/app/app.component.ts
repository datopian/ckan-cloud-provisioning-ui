import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  template: `
    <app-login-screen *ngIf='!this.api.authorized'></app-login-screen>
    <app-workspace *ngIf='this.api.authorized'></app-workspace>
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
