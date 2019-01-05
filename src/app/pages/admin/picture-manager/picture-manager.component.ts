import { Component, OnInit } from '@angular/core';
import { Link } from '../../../features/dropdown/models/link';
import { FirebaseDatabase } from '@angular/fire';
import { AngularFireDatabase } from '@angular/fire/database';
import * as _ from 'lodash';
import { Image } from '../../../models/image';
import { ViewImageComponent } from '../../../features/view-image/view-image.component';
import { MatDialog } from '@angular/material';

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
  public createSubCategory: boolean;
  public newSubCategory: string;

  constructor(private db: AngularFireDatabase,
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
          if (underlink !== 'pictures' && underlink !== 'context') {
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

      console.log(this.links);

      if (this.categorySelected) {
        this.assignSubcategories();
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
  }

  public assignSubcategories(): void {
    const linkFound = _.find(this.links, link => link.name.toLowerCase() === this.categorySelected.toLowerCase());

    if (linkFound.hasOwnProperty('children')) {
      this.subCategories = _.map(linkFound.children, 'name');
    } else {
      this.subCategories = [];
      this.getImages();
    }
  }

  public setSubCategory(value: string): void {
    this.subCategorySelected = value;
    this.createSubCategory = false;
    this.getImages();
  }

  public getImages(): void {
    const linkFound = _.find(this.links, link => link.name.toLowerCase() === this.categorySelected.toLowerCase());
    if (this.subCategorySelected) {
      const underlinkFound = _.find(linkFound.children, link => link.name.toLowerCase() === this.subCategorySelected.toLowerCase());
      this.picturesToDisplay = _.compact(underlinkFound.pictures);
    } else {
      this.picturesToDisplay = _.compact(linkFound.pictures);
    }

    console.log(this.picturesToDisplay);
  }

  public viewImage(image: Image): void {
    this.dialog.open(ViewImageComponent, { data: image }).afterClosed().subscribe();
  }
}
