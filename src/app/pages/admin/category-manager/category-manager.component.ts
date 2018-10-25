import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-manager',
  templateUrl: './category-manager.component.html',
  styleUrls: ['./category-manager.component.scss']
})
export class CategoryManagerComponent implements OnInit {

  public categorySelected: string;
  public subCategorySelected: string;

  constructor() {
  }

  ngOnInit() {
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
  }

  public setSubCategory(value: string): void {
    this.subCategorySelected = value;
  }

}
