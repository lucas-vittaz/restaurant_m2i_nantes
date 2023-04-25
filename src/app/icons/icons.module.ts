import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDarkComponent } from './components/icon-dark/icon-dark.component';
import { IconLightComponent } from './components/icon-light/icon-light.component';

@NgModule({
  declarations: [IconLightComponent, IconDarkComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [IconLightComponent, IconDarkComponent],
})
export class IconsModule {}
