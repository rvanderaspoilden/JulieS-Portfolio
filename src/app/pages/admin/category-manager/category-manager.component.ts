import { Component, OnInit } from '@angular/core';
import { Link } from '../../../features/dropdown/models/link';
import { FirebaseDatabase } from '@angular/fire';
import { AngularFireDatabase } from '@angular/fire/database';
import * as _ from 'lodash';

@Component({
  selector: 'app-category-manager',
  templateUrl: './category-manager.component.html',
  styleUrls: ['./category-manager.component.scss']
})
export class CategoryManagerComponent implements OnInit {

  public categorySelected: string;
  public subCategorySelected: string;

  public links: Link[];
  public subCategories: string[];
  public createSubCategory: boolean;
  public newSubCategory: string;
  public intro: string;

  constructor(private db: AngularFireDatabase) {
  }

  ngOnInit() {
    this.db.object<any>('/').valueChanges().subscribe(links => {
      this.links = [];
      Object.keys(links).forEach(link => {
        const linkTmp = new Link();
        linkTmp.name = link;
        linkTmp.href = '/' + link;
        linkTmp.children = [];

        Object.keys(links[link]).forEach(underlink => {
          if (underlink !== 'pictures' && underlink !== 'context' && underlink !== 'default') {
            const underlinkTmp = new Link();
            underlinkTmp.name = underlink;
            underlinkTmp.href = '/' + underlink;
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
    }
  }

  public setSubCategory(value: string): void {
    this.subCategorySelected = value;
    this.createSubCategory = false;
  }

  public deleteSubcategory(): void {
    this.db.database.ref('/' + this.categorySelected.toLowerCase() + '/' + this.subCategorySelected).remove();
    this.subCategorySelected = null;
  }

  public switchToCreate(): void {
    this.createSubCategory = true;
    this.subCategorySelected = null;
  }

  public addSubCategory(): void {
    const key = this.db.database.ref('/' + this.categorySelected.toLowerCase() + '/' + this.newSubCategory).set({
      pictures: 'empty',
      context: this.intro ? this.intro : ''
    });
    console.log(key);
  }

}
