import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { PageAdministrationComponent } from './pages/page-administration/page-administration.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PageAdministrationComponent],
  imports: [CommonModule, AdministrationRoutingModule, SharedModule],
  exports: [PageAdministrationComponent],
})
export class AdministrationModule {}
