import { Component, OnInit } from '@angular/core';
import { Image } from '../../models/image';
import { ImageColumns } from '../../models/image-columns';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

  public columns: ImageColumns;
  public columnsKeys: string[];

  constructor() {
  }

  ngOnInit() {
    const image1 = new Image('/assets/images/pictures/1.jpg', 'Legend 1');
    const image2 = new Image('/assets/images/pictures/2.jpg', 'Legend 2');
    const image3 = new Image('/assets/images/pictures/3.jpg', 'Legend 3');
    const image4 = new Image('/assets/images/pictures/4.jpg', 'Legend 4');

    this.columns = new ImageColumns();
    this.columns.column1 = [new Image('/assets/images/pictures/1.jpg', 'Legend 1'), new Image('/assets/images/pictures/2.jpg', 'Legend 2'), new Image('/assets/images/pictures/3.jpg', 'Legend 3'), new Image('/assets/images/pictures/4.jpg', 'Legend 4')];
    this.columns.column2 = [new Image('/assets/images/pictures/1.jpg', 'Legend 1'), new Image('/assets/images/pictures/2.jpg', 'Legend 2'), new Image('/assets/images/pictures/3.jpg', 'Legend 3'), new Image('/assets/images/pictures/4.jpg', 'Legend 4')];
    this.columns.column3 = [new Image('/assets/images/pictures/1.jpg', 'Legend 1'), new Image('/assets/images/pictures/2.jpg', 'Legend 2'), new Image('/assets/images/pictures/3.jpg', 'Legend 3'), new Image('/assets/images/pictures/4.jpg', 'Legend 4')];

    this.columnsKeys = Object.keys(this.columns);
  }

}
