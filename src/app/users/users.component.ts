import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less']
})
export class UsersComponent implements OnInit {

  createUserEmail = '';

  constructor(public api: ApiService) { }

  ngOnInit() {
  }

  create() {
    this.api.createUser(this.createUserEmail)
        .subscribe(() => {
          this.api.queryUsers();
        });
    this.createUserEmail = '';
  }
}
