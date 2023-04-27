import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantsRoutingModule } from './restaurants-routing.module';
import { PageListRestaurantsComponent } from './pages/page-list-restaurants/page-list-restaurants.component';
import { PageEditRestaurantComponent } from './pages/page-edit-restaurant/page-edit-restaurant.component';
import { PageAddRestaurantComponent } from './pages/page-add-restaurant/page-add-restaurant.component';
import { SharedModule } from '../shared/shared.module';
import { PageShowRestaurantComponent } from './pages/page-show-restaurant/page-show-restaurant.component';
import { ReservationsModule } from '../reservations/reservations.module';


@NgModule({
  declarations: [
    PageListRestaurantsComponent,
    PageEditRestaurantComponent,
    PageAddRestaurantComponent,
    PageShowRestaurantComponent
  ],
  imports: [
    CommonModule,
    RestaurantsRoutingModule, SharedModule,
    ReservationsModule
  ]
})
export class RestaurantsModule { }
