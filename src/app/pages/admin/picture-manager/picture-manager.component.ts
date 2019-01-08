import { Component, OnInit } from '@angular/core';
import { Link } from '../../../features/dropdown/models/link';
import { AngularFireDatabase } from '@angular/fire/database';
import * as _ from 'lodash';
import { Image } from '../../../models/image';
import { ViewImageComponent } from '../../../features/view-image/view-image.component';
import { MatDialog } from '@angular/material';
import { AngularFireStorage } from '@angular/fire/storage';
import { UploadTaskSnapshot } from '@angular/fire/storage/interfaces';
import { FirebaseStorage } from '@angular/fire';

@Component({
  selector: 'app-picture-manager',
  templateUrl: './picture-manager.component.html',
  styleUrls: ['./picture-manager.component.scss']
})
export class PictureManagerComponent implements OnInit {

  public categorySelected: string;
  public subCategorySelected: string;

  public picturesToDisplay: Image[];

  public links: Link[];
  public subCategories: string[];
  public canCreateImage: boolean;
  public legend: string;

  public curFile: any;

  constructor(private db: AngularFireDatabase,
              private afStorage: AngularFireStorage,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.db.object<any>('/').valueChanges().subscribe(links => {
      this.links = [];
      Object.keys(links).forEach(link => {
        const linkTmp = new Link();
        linkTmp.name = link;
        linkTmp.href = '/' + link;
        linkTmp.pictures = links[link]['pictures'];
        linkTmp.children = [];

        Object.keys(links[link]).forEach(underlink => {
          if (underlink !== 'pictures' && underlink !== 'context' && underlink !== 'default') {
            const underlinkTmp = new Link();
            underlinkTmp.name = underlink;
            underlinkTmp.href = '/' + underlink;
            underlinkTmp.pictures = links[link][underlink]['pictures'];
            linkTmp.children.push(underlinkTmp);
          }
        });

        if (!linkTmp.children.length) {
          delete  linkTmp.children;
        }

        this.links.push(linkTmp);
      });

      if (this.categorySelected) {
        this.assignSubcategories();
      }
    });
  }

  public createImage(): void {
    const imageToSave = new Image();
    delete imageToSave.id;
    delete  imageToSave.displayLegend;

    if (this.legend) {
      imageToSave.legend = this.legend;
    } else {
      delete imageToSave.legend;
    }

    const randomId = Math.random().toString(36).substring(2);
    const ref = this.afStorage.ref(randomId);
    const task = ref.put(this.curFile.target.files[0]);

    task.then((state: UploadTaskSnapshot) => {
      if (state.state.toLowerCase() === 'success') {
        ref.getDownloadURL().subscribe(url => {
          imageToSave.href = url;

          if (this.subCategorySelected) {
            this.db.database
              .ref(`${this.categorySelected.toLowerCase()}/${this.subCategorySelected}/pictures/${randomId}`)
              .set(imageToSave).then(() => {
                this.legend = '';
                this.curFile.value = '';
            });
          } else {
            this.db.database
              .ref(`${this.categorySelected.toLowerCase()}/pictures/${randomId}`)
              .set(imageToSave)
              .then(() => {
                this.legend = '';
                this.curFile.value = '';
              });
          }
        });
      } else {
        console.log('Error occured during upload');
      }
    });
  }

  public canFadeButton(type: string, valueToCompare: string): boolean {
    if (type === 'category') {
      return this.categorySelected && this.categorySelected !== valueToCompare;
    }
    if (type === 'sub-categories') {
      return this.subCategorySelected && this.subCategorySelected !== valueToCompare;
    }
  }

  public setCategory(value: string): void {
    this.categorySelected = value;
    this.subCategorySelected = null;

    this.assignSubcategories();
    this.getImages();
  }

  public assignSubcategories(): void {
    const linkFound = _.find(this.links, link => link.name.toLowerCase() === this.categorySelected.toLowerCase());

    if (linkFound.hasOwnProperty('children')) {
      this.subCategories = _.map(linkFound.children, 'name');

      if (this.subCategorySelected) {
        this.canCreateImage = true;
      } else {
        this.canCreateImage = false;
      }
    } else {
      this.canCreateImage = true;
      this.subCategories = [];
    }
    this.getImages();
  }

  public setSubCategory(value: string): void {
    this.subCategorySelected = value;
    this.canCreateImage = true;
    this.getImages();
  }

  public getImages(): void {
    const linkFound = _.find(this.links, link => link.name.toLowerCase() === this.categorySelected.toLowerCase());
    if (this.subCategorySelected) {
      const underlinkFound = _.find(linkFound.children, link => link.name.toLowerCase() === this.subCategorySelected.toLowerCase());

      this.picturesToDisplay = this.convertToImage(underlinkFound.pictures);
    } else {
      if (!linkFound.hasOwnProperty('children')) {
        this.picturesToDisplay = this.convertToImage(linkFound.pictures);
      } else {
        this.picturesToDisplay = [];
      }
    }
  }

  public viewImage(image: Image): void {
    this.dialog.open(ViewImageComponent, { data: image }).afterClosed().subscribe();
  }

  public deleteImage(image: Image): void {
    if (this.subCategorySelected) {
      this.db.object(this.categorySelected.toLowerCase() + '/' + this.subCategorySelected.toLowerCase() + '/pictures/' + image.id).remove();
    } else {
      this.db.object(this.categorySelected.toLowerCase() + '/pictures/' + image.id).remove();
    }
  }

  public convertToImage(data: any): Image[] {
    const images = [];

    if (data && data !== 'empty') {
      Object.keys(data).forEach(key => {
        const image = new Image();
        image.id = key;
        image.href = data[key].href;
        image.legend = data[key].legend;
        image.displayLegend = false;

        images.push(image);
      });
    }

    return images;
  }
}
