import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

  public column1: string[];
  public column2: string[];
  public column3: string[];

  constructor() {
  }

  ngOnInit() {
    this.column1 = ['/assets/images/pictures/1.jpg', '/assets/images/pictures/2.jpg', '/assets/images/pictures/3.jpg'];
    this.column2 = ['/assets/images/pictures/2.jpg', '/assets/images/pictures/1.jpg', '/assets/images/pictures/3.jpg'];
    this.column3 = ['/assets/images/pictures/3.jpg', '/assets/images/pictures/3.jpg', '/assets/images/pictures/1.jpg'];
  }

}
