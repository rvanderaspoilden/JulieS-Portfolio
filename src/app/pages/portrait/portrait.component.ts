import { Component, OnInit } from '@angular/core';
import { ImageColumns } from '../../models/image-columns';
import { MatDialog } from '@angular/material';
import { Image } from '../../models/image';
import { ViewImageComponent } from '../../features/view-image/view-image.component';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-portrait',
  templateUrl: './portrait.component.html',
  styleUrls: ['./portrait.component.scss']
})
export class PortraitComponent implements OnInit {

  public columns: ImageColumns;
  public columnsKeys: string[];

  constructor(private dialog: MatDialog,
              private route: ActivatedRoute,
              private db: AngularFireDatabase) {
  }

  ngOnInit() {
    let directory = this.route.snapshot.routeConfig.path;

    this.route.queryParams.subscribe(param => {
      if (param.hasOwnProperty('href')) {
        directory = param.href;
      }
    });

    this.db.list<Image>(directory).valueChanges().subscribe((images: Image[]) => {
      this.columns = new ImageColumns([], [], []);

      for (let i = 0; i < images.length; i += 3) {
        if (images[i]) {
          this.columns.column1.push(images[i]);
        }
      }

      for (let i = 1; i < images.length; i += 3) {
        if (images[i]) {
          this.columns.column2.push(images[i]);
        }
      }

      for (let i = 2; i < images.length; i += 3) {
        if (images[i]) {
          this.columns.column3.push(images[i]);
        }
      }

      this.columnsKeys = Object.keys(this.columns);
    });
  }

  public viewImage(image: Image): void {
    this.dialog.open(ViewImageComponent, { data: image }).afterClosed().subscribe();
  }

}
