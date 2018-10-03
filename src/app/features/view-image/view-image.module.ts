import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewImageComponent } from './view-image.component';
import { MatDialogModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
  ],
  declarations: [ViewImageComponent],
  exports: [ViewImageComponent],
  entryComponents: [ViewImageComponent]
})
export class ViewImageModule {
}
