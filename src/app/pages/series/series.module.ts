import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesComponent } from './series.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './series.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
  ],
  declarations: [SeriesComponent]
})
export class SeriesModule { }
