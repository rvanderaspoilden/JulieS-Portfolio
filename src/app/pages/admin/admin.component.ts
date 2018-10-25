import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public panelToManage: string;

  constructor() {
  }

  ngOnInit() {
  }

  public setPanelToManage(value: string): void {
    this.panelToManage = value;
  }

}
