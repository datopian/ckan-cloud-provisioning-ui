import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-instance',
  templateUrl: './instance.component.html',
  styleUrls: ['./instance.component.less']
})
export class InstanceComponent implements OnInit {

  @Input() instance: any;
  @Output() edit = new EventEmitter<any>();

  inProgress = false;
  success = null;

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  connect() {
    this.api.getConnectionInfo(this.instance.id)
        .subscribe((password) => {
          const confirmed = window.confirm(`Connect to ${this.instance.id}? Password is: ${password}`);
          if (confirmed) {
            window.open(this.instance.parameters.siteUrl, '__blank');
          }
        });
  }
  delete() {
    if (this.instance.id) {
      this.inProgress = true;
      this.api.deleteInstance(this.instance.id)
        .subscribe((ret: any) => {
          this.inProgress = false;
          this.success = ret.success;
          setTimeout(() => { this.success = null; }, 3000);
        });
    }
  }

  editInstance() {
    if (this.instance.id) {
      this.edit.emit(this.instance);
    }
  }

}
