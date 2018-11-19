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

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    if (!this.instance.params) {
      this.instance.params = {};
    }
  }

  submit() {
    this.api.createOrUpdate(this.instance)
      .subscribe((result) => {
        // todo - do something with result?
      });
    this.submitted.emit(true);
  }
}
