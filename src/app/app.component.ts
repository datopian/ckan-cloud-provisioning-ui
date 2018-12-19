import { Component } from '@angular/core';
import { ApiService } from './api.service';
import * as $ from 'jquery';

declare var $: any;

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
  constructor(public api: ApiService) {
  }

  ngOnInit() {
    //initializing tooltip
    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();
    });
  }
}
