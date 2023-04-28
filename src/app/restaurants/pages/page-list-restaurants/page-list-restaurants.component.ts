import { Component, Input, Type } from '@angular/core';
import { Restaurant } from '../../models/restaurant';
import { RestaurantsService } from '../../services/restaurants.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { TypeRestaurantService } from 'src/app/type-restaurant/services/type-restaurant.service';
import { TypeRestaurant } from 'src/app/type-restaurant/models/type-restaurant';

@Component({
  selector: 'app-page-list-restaurants',
  templateUrl: './page-list-restaurants.component.html',
  styleUrls: ['./page-list-restaurants.component.scss'],
})
export class PageListRestaurantsComponent {
  public collection$: BehaviorSubject<Restaurant[]>;
  public restaurant!: Restaurant;
  public types$: BehaviorSubject<TypeRestaurant[]>;

  constructor(
    private restaurantService: RestaurantsService,
    private typeRestaurantService: TypeRestaurantService,
    private router: Router
  ) {
    this.collection$ = this.restaurantService.collection$;
    this.types$ = this.typeRestaurantService.collection$;
  }

  ngOnInit() {
    this.restaurantService.refreshCollection();
  }
}
