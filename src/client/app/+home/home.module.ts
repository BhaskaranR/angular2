import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';

import { HeroService } from  '../shared/services/hero/hero.service';

@NgModule({
    imports: [CommonModule, SharedModule],
    declarations: [HomeComponent],
    exports: [HomeComponent],
    providers: [HeroService]
})

export class HomeModule { }
