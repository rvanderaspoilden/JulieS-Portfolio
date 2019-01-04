import { Routes } from '@angular/router';
import { ShowcaseComponent } from './showcase.component';

export const ROUTES: Routes = [
  {
    path: 'publications',
    component: ShowcaseComponent
  },
  {
    path: 'reportages',
    component: ShowcaseComponent
  },
  {
    path: 'landscapes',
    component: ShowcaseComponent
  },
  {
    path: 'portraits',
    component: ShowcaseComponent
  }
];
