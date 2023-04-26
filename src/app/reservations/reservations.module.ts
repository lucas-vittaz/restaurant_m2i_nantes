import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationsRoutingModule } from './reservations-routing.module';
import { FormReservationComponent } from './forms/form-reservation/form-reservation.component';


@NgModule({
  declarations: [
    FormReservationComponent
  ],
  imports: [
    CommonModule,
    ReservationsRoutingModule
  ],
  exports: [
    FormReservationComponent
  ]
})
export class ReservationsModule { }
