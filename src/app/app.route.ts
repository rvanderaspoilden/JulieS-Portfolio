import {Routes} from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { AboutComponent } from './pages/about/about.component';

export const ROUTES: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];
