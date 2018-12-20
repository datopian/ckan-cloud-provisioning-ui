import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'budgetkey-ng2-auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  @Output() selectTab = new EventEmitter<string>();
  email = '';

  constructor(private auth: AuthService) {
    this.auth.getUser()
        .subscribe((user) => {
          this.email = user.profile.email;
        });
  }

  ngOnInit() {
  }

  emit(tab) {
    this.selectTab.emit(tab);
  }

  logout() {
    this.auth.logout('/');
  }

}
