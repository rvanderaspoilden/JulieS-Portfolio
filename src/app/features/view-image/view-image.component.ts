import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Image } from '../../models/image';

@Component({
  selector: 'app-view-image',
  templateUrl: './view-image.component.html',
  styleUrls: ['./view-image.component.scss']
})
export class ViewImageComponent implements OnInit {

  public image: Image;

  constructor(public dialogRef: MatDialogRef<ViewImageComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Image) {
  }

  ngOnInit() {
    this.image = this.data;
  }

}
