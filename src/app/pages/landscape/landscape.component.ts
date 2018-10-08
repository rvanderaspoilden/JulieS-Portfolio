import { Component, OnInit } from '@angular/core';
import { ImageColumns } from '../../models/image-columns';
import { MatDialog } from '@angular/material';
import { Image } from '../../models/image';
import { ViewImageComponent } from '../../features/view-image/view-image.component';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-landscape',
  templateUrl: './landscape.component.html',
  styleUrls: ['./landscape.component.scss']
})
export class LandscapeComponent implements OnInit {

  public columns: ImageColumns;
  public columnsKeys: string[];

  constructor(private dialog: MatDialog,
              private db: AngularFireDatabase) {
  }

  ngOnInit() {
    this.db.list<any>('landscape').valueChanges().subscribe(val => {
      console.log(val);
    });

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
