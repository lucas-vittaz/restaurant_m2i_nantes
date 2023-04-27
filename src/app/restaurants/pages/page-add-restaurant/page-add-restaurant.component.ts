import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from '../../models/restaurant';
import { RestaurantsService } from '../../services/restaurants.service';

@Component({
  selector: 'app-page-add-restaurant',
  templateUrl: './page-add-restaurant.component.html',
  styleUrls: ['./page-add-restaurant.component.scss'],
})
export class PageAddRestaurantComponent {
  public restaurant: Restaurant;

  constructor(
    private restaurantService: RestaurantsService,
    private router: Router 
  ) {
    this.restaurant = new Restaurant();
  }
  public action(restaurant: Restaurant) {
    this.restaurantService.add(restaurant).subscribe(() => {
      this.router.navigate(['restaurants']);
    });
  }
}
