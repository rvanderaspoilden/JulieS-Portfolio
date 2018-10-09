import { Component, OnInit } from '@angular/core';
import { ImageColumns } from '../../models/image-columns';
import { MatDialog } from '@angular/material';
import { Image } from '../../models/image';
import { ViewImageComponent } from '../../features/view-image/view-image.component';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { forEach } from '@angular/router/src/utils/collection';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landscape',
  templateUrl: './landscape.component.html',
  styleUrls: ['./landscape.component.scss']
})
export class LandscapeComponent implements OnInit {

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
