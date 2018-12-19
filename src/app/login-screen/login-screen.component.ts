import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {

  constructor(public api: ApiService) {
  }

  login_href() {
    if (this.api.providers) {
      if (this.api.providers.google) {
        return this.api.providers.google.url;
      } else if (this.api.providers.github) {
        return this.api.providers.github.url;
      }
    }
    return '#';
  }

  ngOnInit() {
  }

}
