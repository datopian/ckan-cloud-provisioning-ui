import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-instances',
  templateUrl: './instances.component.html',
  styleUrls: ['./instances.component.less']
})
export class InstancesComponent implements OnInit {

  editMode = false;
  selectedInstance: any = null;
  receivedDeets: any = null;

  constructor(public api: ApiService) { }

  ngOnInit() {
  }

  create() {
    this.editMode = false;
    this.selectedInstance = {};
  }

  edit(instance) {
    this.editMode = true;
    this.selectedInstance = instance;
  }

  connnect(instance) {
    this.receivedDeets = instance;
  }

}
