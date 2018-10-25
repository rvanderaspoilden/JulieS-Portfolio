import {Routes} from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: AdminComponent,
    pathMatch: 'full'
  }
];
