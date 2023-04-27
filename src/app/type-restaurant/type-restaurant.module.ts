import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PageListTypeRestaurantComponent } from './pages/page-list-type-restaurant/page-list-type-restaurant.component';
import { TypeRestaurantRoutingModule } from './type-restaurant-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PageListTypeRestaurantComponent],
  imports: [CommonModule, TypeRestaurantRoutingModule, SharedModule],
})
export class TypeRestaurantModule {}
