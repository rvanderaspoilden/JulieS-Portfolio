import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { ROUTES } from './admin.route';
import { RouterModule } from '@angular/router';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { MatButtonModule, MatDialogModule, MatInputModule } from '@angular/material';
import { CategoryManagerComponent } from './category-manager/category-manager.component';
import { FormsModule } from '@angular/forms';
import { PictureManagerComponent } from './picture-manager/picture-manager.component';
import { ShowcaseComponent } from '../showcase/showcase.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
  ],
  declarations: [AdminComponent, AdminHeaderComponent, CategoryManagerComponent, PictureManagerComponent],
  entryComponents: [
    ShowcaseComponent
  ]
})
export class AdminModule { }
