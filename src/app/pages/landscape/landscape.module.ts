import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandscapeComponent } from './landscape.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './landscape.route';
import { MatDialogModule } from '@angular/material';
import { ViewImageModule } from '../../features/view-image/view-image.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    MatDialogModule,
    ViewImageModule,
  ],
  declarations: [LandscapeComponent]
})
export class LandscapeModule { }
