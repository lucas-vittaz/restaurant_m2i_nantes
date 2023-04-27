import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Reservation } from '../../models/reservation';
import { ReservationService } from '../../services/reservation.service';
import { RestaurantsService } from 'src/app/restaurants/services/restaurants.service';
import { NumberFormatStyle } from '@angular/common';

@Component({
  selector: 'app-page-list-reservations',
  templateUrl: './page-list-reservations.component.html',
  styleUrls: ['./page-list-reservations.component.scss'],
})
export class PageListReservationsComponent {
  public collection$: BehaviorSubject<Reservation[]>;
  public month: string = 'Avril';
  public year: number = 2023;
  public nbDays: number = 30;
  public days: string[];
  public reservation!: Reservation;

  constructor(
    private reservationService: ReservationService,
    private restaurantService: RestaurantsService
  ) {
    this.collection$ = this.reservationService.collection$;
    this.days = [];
    for (let i = 1; i < this.nbDays; i++) {
      if (i < 10) {
        this.days.push('0' + i.toString());
      } else {
        this.days.push(i.toString());
      }
    }
  }
}
