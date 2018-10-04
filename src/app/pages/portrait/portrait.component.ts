import { Component, OnInit } from '@angular/core';
import { ImageColumns } from '../../models/image-columns';
import { MatDialog } from '@angular/material';
import { Image } from '../../models/image';
import { ViewImageComponent } from '../../features/view-image/view-image.component';

@Component({
  selector: 'app-portrait',
  templateUrl: './portrait.component.html',
  styleUrls: ['./portrait.component.scss']
})
export class PortraitComponent implements OnInit {

  public columns: ImageColumns;
  public columnsKeys: string[];

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
    const image1 = new Image('/assets/images/pictures/1.jpg', 'Legend 1');
    const image2 = new Image('/assets/images/pictures/2.jpg', 'Legend 2');
    const image3 = new Image('/assets/images/pictures/3.jpg', 'Legend 3');
    const image4 = new Image('/assets/images/pictures/4.jpg', 'Legend 4');

    this.columns = new ImageColumns();
    this.columns.column1 = [new Image('/assets/images/pictures/1.jpg', 'Legend 1'), new Image('/assets/images/pictures/2.jpg', 'Legend 2'), new Image('/assets/images/pictures/3.jpg', 'Legend 3'), new Image('/assets/images/pictures/4.jpg', 'Legend 4')];
    this.columns.column2 = [new Image('/assets/images/pictures/2.jpg', 'Legend 2'), new Image('/assets/images/pictures/2.jpg', 'Legend 2'), new Image('/assets/images/pictures/3.jpg', 'Legend 3'), new Image('/assets/images/pictures/4.jpg', 'Legend 4')];
    this.columns.column3 = [new Image('/assets/images/pictures/3.jpg', 'Legend 3'), new Image('/assets/images/pictures/2.jpg', 'Legend 2'), new Image('/assets/images/pictures/3.jpg', 'Legend 3'), new Image('/assets/images/pictures/4.jpg', 'Legend 4')];

    this.columnsKeys = Object.keys(this.columns);
  }

  public viewImage(image: Image): void {
    this.dialog.open(ViewImageComponent, { data: image }).afterClosed().subscribe();
  }

}
