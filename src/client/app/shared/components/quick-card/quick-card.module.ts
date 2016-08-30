import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MdButtonModule } from '@angular2-material/button';
import { QuickCardComponent } from './quick-card.component'
import { MdCardModule } from '@angular2-material/card';

@NgModule({
    imports: [MdButtonModule, RouterModule, MdCardModule],
    declarations: [QuickCardComponent],
    exports: [QuickCardComponent],
})

export class QuickCardModule { }
