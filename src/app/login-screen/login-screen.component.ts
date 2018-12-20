import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AuthService } from 'budgetkey-ng2-auth';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {

  email = '';

  constructor(public api: ApiService,
              private auth: AuthService) {
    this.auth.getUser()
        .subscribe((user) => {
          if (user && user.profile) {
            this.email = user.profile.email;
          }
        });
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

  logout() {
    this.auth.logout('/');
  }

  ngOnInit() {
  }

}
