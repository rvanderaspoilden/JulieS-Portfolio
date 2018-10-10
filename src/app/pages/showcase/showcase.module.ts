import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowcaseComponent } from './showcase.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './showcase.route';
import { MatDialogModule } from '@angular/material';
import { ViewImageModule } from '../../features/view-image/view-image.module';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    ViewImageModule,
    RouterModule.forChild(ROUTES),
  ],
  declarations: [ShowcaseComponent],
})
export class ShowcaseModule { }
