import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header.component';
import { DropdownModule } from '../features/dropdown/dropdown.module';

@NgModule({
  imports: [
    CommonModule,
    DropdownModule,
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule { }
