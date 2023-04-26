import { Component, Input } from '@angular/core';
import { Restaurant } from '../../models/restaurant';
import { RestaurantsService } from '../../services/restaurants.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-list-restaurants',
  templateUrl: './page-list-restaurants.component.html',
  styleUrls: ['./page-list-restaurants.component.scss'],
})
export class PageListRestaurantsComponent {
  public collection$: BehaviorSubject<Restaurant[]>;
  public restaurant!: Restaurant;

  constructor(private restaurantService: RestaurantsService, private router: Router) {
    this.collection$ = this.restaurantService.collection$;
    console.log("depuis page list" + this.collection$);
  }
}
