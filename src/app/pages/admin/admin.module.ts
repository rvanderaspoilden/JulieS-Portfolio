import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { ROUTES } from './admin.route';
import { RouterModule } from '@angular/router';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { MatButtonModule } from '@angular/material';
import { CategoryManagerComponent } from './category-manager/category-manager.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule.forRoot(ROUTES),
  ],
  declarations: [AdminComponent, AdminHeaderComponent, CategoryManagerComponent]
})
export class AdminModule { }
