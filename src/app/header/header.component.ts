import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  @Output('selectTab') selectTab = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  emit(tab) {
    this.selectTab.emit(tab);
  }

}
