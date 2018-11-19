import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-instance-details-modal',
  templateUrl: './instance-details-modal.component.html',
  styleUrls: ['./instance-details-modal.component.less']
})
export class InstanceDetailsModalComponent implements OnInit {

  @Input() instance: any;
  @Input() editMode: boolean;
  @Output() close = new EventEmitter<any>(null);

  constructor() { }

  ngOnInit() {
  }

  closeClick() {
    this.close.emit(null);
  }
}
