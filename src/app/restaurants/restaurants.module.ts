import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { FormRestaurantComponent } from './components/form-restaurant/form-restaurant.component';
import { PageAddRestaurantComponent } from './pages/page-add-restaurant/page-add-restaurant.component';
import { PageEditRestaurantComponent } from './pages/page-edit-restaurant/page-edit-restaurant.component';
import { PageListRestaurantsComponent } from './pages/page-list-restaurants/page-list-restaurants.component';
import { PageShowRestaurantComponent } from './pages/page-show-restaurant/page-show-restaurant.component';
import { RestaurantsRoutingModule } from './restaurants-routing.module';
import { ReservationsModule } from '../reservations/reservations.module';
import { PageListRestaurantsCategoriesComponent } from './pages/page-list-restaurants-categories/page-list-restaurants-categories.component';

@NgModule({
  declarations: [
    PageListRestaurantsComponent,
    PageEditRestaurantComponent,
    PageAddRestaurantComponent,
    PageShowRestaurantComponent,
    FormRestaurantComponent,
    PageListRestaurantsCategoriesComponent,
  ],
  imports: [
    CommonModule,
    RestaurantsRoutingModule,
    SharedModule,
    ReservationsModule,
    ReactiveFormsModule,
  ],
})
export class RestaurantsModule {}
