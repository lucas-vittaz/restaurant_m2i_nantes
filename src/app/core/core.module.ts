import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconsModule } from '../icons/icons.module';
import { LoginModule } from '../login/login.module';
import { TemplatesModule } from '../templates/templates.module';
import { UiModule } from '../ui/ui.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, NavComponent],
  imports: [CommonModule, RouterModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavComponent,
    UiModule,
    TemplatesModule,
    IconsModule,
    LoginModule,
  ],
})
export class CoreModule {}
