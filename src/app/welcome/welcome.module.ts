import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { TemplatesModule } from '../templates/templates.module';
import { PageWelcomeComponent } from './pages/page-welcome/page-welcome.component';
import { WelcomeRoutingModule } from './welcome-routing.module';

@NgModule({
  declarations: [PageWelcomeComponent],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    TemplatesModule,
    SharedModule,
    RouterModule,
  ],
  exports: [],
})
export class WelcomeModule {}
