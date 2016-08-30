import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeRootComponent } from './home-root.component';
import { HomeRootComponentGuard } from  './home-root.guard';
import { UserService } from '../shared/services/user/user.service';

@NgModule({
    imports: [CommonModule, SharedModule],
    declarations: [HomeRootComponent],
    exports: [HomeRootComponent],
    providers: [UserService, HomeRootComponentGuard ]
})

export class HomeRootModule { }
