import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-instance-connection-modal',
  templateUrl: './instance-connection-modal.component.html',
  styleUrls: ['./instance-connection-modal.component.less']
})
export class InstanceConnectionModalComponent implements OnInit {

  @Input() deets: any;
  @Output() close = new EventEmitter<any>(null);

  constructor(public api: ApiService) { }

  ngOnInit() {
  }

  closeClick() {
    this.close.emit(null);
  }

  refresh() {
    this.api.getConnectionInfo(this.deets.id, this.deets);
  }
}
