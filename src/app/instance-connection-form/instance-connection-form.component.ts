import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-instance-connection-form',
  templateUrl: './instance-connection-form.component.html',
  styleUrls: ['./instance-connection-form.component.less']
})
export class InstanceConnectionFormComponent implements OnInit {

  @Input() deets: any;

  constructor() { }

  ngOnInit() {
  }

}
