import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ToolbarModule } from './toolbar/toolbar.module';
import { NavbarModule } from './navbar/navbar.module';
import { MaterialModule } from './material.module';
import { QuickCardModule } from './components/quick-card/quick-card.module';
import { NameListService } from './name-list/index';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule.forRoot(), QuickCardModule],
  exports: [ToolbarModule, NavbarModule, MaterialModule,
    CommonModule, FormsModule, RouterModule, QuickCardModule, ReactiveFormsModule]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [NameListService]
    };
  }
}
