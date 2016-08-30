import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { UsersComponent } from './users.component';

import { UserBadgeComponent } from './user-badge.component';

import { UserService } from '../shared/services/user/user.service';

@NgModule({
    imports: [CommonModule, SharedModule],
    declarations: [UsersComponent, UserBadgeComponent],
    exports: [UsersComponent, UserBadgeComponent],
    providers: [UserService]
})

export class UserModule { }
