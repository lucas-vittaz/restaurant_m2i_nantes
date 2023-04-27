import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ReservationsRoutingModule } from './reservations-routing.module';
import { FormReservationComponent } from './forms/form-reservation/form-reservation.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormReservationComponent
  ],
  imports: [
    CommonModule,
    ReservationsRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    FormReservationComponent
  ]
})
export class ReservationsModule { }
