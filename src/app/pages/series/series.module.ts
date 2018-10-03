import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesComponent } from './series.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './series.route';
import { MatDialogModule } from '@angular/material';
import { ViewImageModule } from '../../features/view-image/view-image.module';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    RouterModule.forChild(ROUTES),
    ViewImageModule,
  ],
  declarations: [SeriesComponent],
})
export class SeriesModule { }
