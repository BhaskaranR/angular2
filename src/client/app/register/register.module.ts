import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './register.component';

import { UnauthenticatedGuard } from '../unauthenticated.guard';

import { UserService } from '../shared/services/user/user.service';

@NgModule({
    imports: [CommonModule, SharedModule],
    declarations: [RegisterComponent],
    exports: [RegisterComponent],
    providers: [UserService, UnauthenticatedGuard]
})

export class RegisterModule { }
