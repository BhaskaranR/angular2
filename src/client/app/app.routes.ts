import { Routes } from '@angular/router';

import { AboutRoutes } from './+about/index';
import { HomeRoutes } from './+home/index';

import { LoginRoutes } from './login/index';
import { RegisterRoutes } from './register/index';
//import { HomeRootRoutes } from './home-root/home-root.routes';
//import { HomeRootComponentGuard } from './home-root/home-root.guard';


export const routes: Routes = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...LoginRoutes,
  ...RegisterRoutes
];

