import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login.component';

import { UnauthenticatedGuard } from '../unauthenticated.guard';

import { UserService } from '../shared/services/user/user.service';

@NgModule({
    imports: [CommonModule, SharedModule],
    declarations: [LoginComponent],
    exports: [LoginComponent],
    providers: [UserService, UnauthenticatedGuard
  ]
})
export class LoginModule { }
