import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationsRoutingModule } from './reservations-routing.module';
import { FormReservationComponent } from './forms/form-reservation/form-reservation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageListReservationsComponent } from './pages/page-list-reservations/page-list-reservations.component';
import { SharedModule } from '../shared/shared.module';
import { CalendarItemComponent } from './components/calendar-item/calendar-item.component';

@NgModule({
  declarations: [FormReservationComponent, PageListReservationsComponent, CalendarItemComponent],
  imports: [
    CommonModule,
    ReservationsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  exports: [FormReservationComponent, PageListReservationsComponent, CalendarItemComponent],
})
export class ReservationsModule {}
