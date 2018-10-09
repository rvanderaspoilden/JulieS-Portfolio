import { Routes } from '@angular/router';
import { LandscapeComponent } from './landscape.component';
import { GetPicturesResolver } from '../../resolvers/get-pictures.resolver';

export const ROUTES: Routes = [
  {
    path: 'landscape',
    component: LandscapeComponent,
  }
];
