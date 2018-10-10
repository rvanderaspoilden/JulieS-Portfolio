import { Component, OnInit } from '@angular/core';
import { Image } from '../../models/image';
import { ImageColumns } from '../../models/image-columns';
import { MatDialog } from '@angular/material';
import { ViewImageComponent } from '../../features/view-image/view-image.component';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {

  public title: string;
  public context: string;
  public displayInfo: boolean;
  public columns: ImageColumns;
  public columnsKeys: string[];

  constructor(private dialog: MatDialog,
              private route: ActivatedRoute,
              private router: Router,
              private db: AngularFireDatabase) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateData();
      }
    });
  }

  ngOnInit() {
    this.updateData();
  }

  public viewImage(image: Image): void {
    this.dialog.open(ViewImageComponent, { data: image }).afterClosed().subscribe();
  }

  private updateData(): void {
    const root = this.route.snapshot.routeConfig.path;
    let child = '';

    this.route.queryParams.subscribe(param => {
      if (param.hasOwnProperty('href')) {
        child = param.href;
      }
    });

    const directory = child ? root + '/' + child : root;
    this.displayInfo = !!child;
    this.title = child ? child : root;

    this.db.object<string>(directory + '/context').valueChanges().subscribe(value => {
      this.context = value;
    });

    this.db.list<Image>(directory + '/pictures').valueChanges().subscribe((images: Image[]) => {
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

}
