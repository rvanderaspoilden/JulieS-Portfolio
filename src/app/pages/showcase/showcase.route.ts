import { Routes } from '@angular/router';
import { ShowcaseComponent } from './showcase.component';

export const ROUTES: Routes = [
  {
    path: 'series',
    component: ShowcaseComponent
  },
  {
    path: 'landscape',
    component: ShowcaseComponent
  },
  {
    path: 'portrait',
    component: ShowcaseComponent
  }
];
