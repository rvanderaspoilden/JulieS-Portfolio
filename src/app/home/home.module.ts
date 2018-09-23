import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {RouterModule} from '@angular/router';
import {ROUTES} from './home.route';
import {CarouselModule} from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    CarouselModule.forRoot(),
  ],
  declarations: [HomeComponent],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
