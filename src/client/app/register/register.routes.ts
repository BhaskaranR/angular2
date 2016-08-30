import { Route } from '@angular/router';
import { RegisterComponent } from './index';

import { UnauthenticatedGuard } from '../unauthenticated.guard';

export const RegisterRoutes: Route[] = [
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [UnauthenticatedGuard]
  }
];
