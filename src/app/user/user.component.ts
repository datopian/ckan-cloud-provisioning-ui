import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {

  @Input() user: any;

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  delete() {
    this.api.deleteUser(this.user.key)
        .subscribe(() => {
          this.api.queryUsers();
        });
  }
}
