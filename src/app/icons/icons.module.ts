import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDarkComponent } from './components/icon-dark/icon-dark.component';
import { IconFacebookComponent } from './components/icon-facebook/icon-facebook.component';
import { IconInstagramComponent } from './components/icon-instagram/icon-instagram.component';
import { IconLightComponent } from './components/icon-light/icon-light.component';
import { IconMenuComponent } from './components/icon-menu/icon-menu.component';
import { IconOrderComponent } from './components/icon-order/icon-order.component';
import { IconRestaurantComponent } from './components/icon-restaurant/icon-restaurant.component';
import { IconTwitterComponent } from './components/icon-twitter/icon-twitter.component';

@NgModule({
  declarations: [
    IconLightComponent,
    IconDarkComponent,
    IconRestaurantComponent,
    IconMenuComponent,
    IconOrderComponent,
    IconInstagramComponent,
    IconFacebookComponent,
    IconTwitterComponent,
  ],
  imports: [CommonModule, FontAwesomeModule],
  exports: [
    IconLightComponent,
    IconDarkComponent,
    IconRestaurantComponent,
    IconMenuComponent,
    IconOrderComponent,
    IconInstagramComponent,
    IconFacebookComponent,
    IconTwitterComponent,
  ],
})
export class IconsModule {}
