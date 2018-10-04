import { Component, OnInit } from '@angular/core';
import { Image } from '../../models/image';
import { ImageColumns } from '../../models/image-columns';
import { MatDialog } from '@angular/material';
import { ViewImageComponent } from '../../features/view-image/view-image.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

  public title: string;
  public columns: ImageColumns;
  public columnsKeys: string[];

  constructor(private dialog: MatDialog,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(param => {
      const seriesName = param.get('href');
      if (seriesName) {
        this.title = seriesName;
      }
    });

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

  public viewImage(image: Image): void {
    this.dialog.open(ViewImageComponent, { data: image }).afterClosed().subscribe();
  }

}
