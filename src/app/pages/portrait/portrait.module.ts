import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortraitComponent } from './portrait.component';
import { MatDialogModule } from '@angular/material';
import { ViewImageModule } from '../../features/view-image/view-image.module';
import { RouterModule } from '@angular/router';
import { ROUTES } from './portrait.route';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    ViewImageModule,
    RouterModule.forChild(ROUTES),
  ],
  declarations: [PortraitComponent]
})
export class PortraitModule { }
