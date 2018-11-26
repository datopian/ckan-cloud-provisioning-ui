import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-instance-details-form',
  templateUrl: './instance-details-form.component.html',
  styleUrls: ['./instance-details-form.component.less']
})
export class InstanceDetailsFormComponent implements OnInit {

  @Input() instance: any;
  @Input() editMode: boolean;
  @Output() submitted = new EventEmitter<boolean>();
  inProgress = false;

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    if (!this.instance.params) {
      this.instance.params = {};
    }
  }

  submit() {
    this.inProgress = true;
    this.api.createOrUpdate(this.instance)
      .subscribe((result) => {
        this.api.queryInstances();
        this.submitted.emit(true);
      });
  }
}
