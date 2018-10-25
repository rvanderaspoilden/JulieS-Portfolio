import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {

  @Output() panelToManageChanged: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

}
