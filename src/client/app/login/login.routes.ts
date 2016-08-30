import { Route } from '@angular/router';
import { LoginComponent } from './index';

import { UnauthenticatedGuard } from '../unauthenticated.guard';

export const LoginRoutes: Route[] = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [UnauthenticatedGuard]
  }
];
