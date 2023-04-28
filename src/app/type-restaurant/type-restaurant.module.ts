import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PageListTypeRestaurantComponent } from './pages/page-list-type-restaurant/page-list-type-restaurant.component';
import { TypeRestaurantRoutingModule } from './type-restaurant-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PageAddTypeRestaurantComponent } from './pages/page-add-type-restaurant/page-add-type-restaurant.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormAddTypeRestaurantComponent } from './forms/form-add-type-restaurant/form-add-type-restaurant.component';

@NgModule({
  declarations: [
    PageListTypeRestaurantComponent,
    PageAddTypeRestaurantComponent,
    FormAddTypeRestaurantComponent,
  ],
  imports: [
    CommonModule,
    TypeRestaurantRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class TypeRestaurantModule {}
