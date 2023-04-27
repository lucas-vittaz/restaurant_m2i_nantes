import { Component, Input } from '@angular/core';
import { Reservation } from '../../models/reservation';
import { RestaurantsService } from 'src/app/restaurants/services/restaurants.service';
import { Restaurant } from 'src/app/restaurants/models/restaurant';

@Component({
  selector: 'app-calendar-item',
  templateUrl: './calendar-item.component.html',
  styleUrls: ['./calendar-item.component.scss'],
})
export class CalendarItemComponent {
  @Input() public item!: Reservation;
  public restaurant!: Restaurant;

  constructor(private restaurantsService: RestaurantsService) {}

  ngOnInit(): void {
    this.restaurant = new Restaurant();

    this.restaurantsService
      .getById(this.item.restaurantId)
      .subscribe((data) => {
        Object.assign(this.restaurant, data);
      });
  }
}
