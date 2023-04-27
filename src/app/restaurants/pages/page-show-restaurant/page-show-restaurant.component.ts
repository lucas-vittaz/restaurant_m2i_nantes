import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from '../../models/restaurant';
import { RestaurantsService } from '../../services/restaurants.service';
import { TypeRestaurant } from 'src/app/type-restaurant/models/type-restaurant';
import { TypeRestaurantService } from 'src/app/type-restaurant/services/type-restaurant.service';
import { Reservation } from 'src/app/reservations/models/reservation';
import { ReservationService } from 'src/app/reservations/services/reservation.service';

@Component({
  selector: 'app-page-show-restaurant',
  templateUrl: './page-show-restaurant.component.html',
  styleUrls: ['./page-show-restaurant.component.scss'],
})
export class PageShowRestaurantComponent {
  public id: number;
  public restaurant: Restaurant;
  public typeRestaurant: TypeRestaurant;

  public title!: string;
  public restaurantId!: number;
  public init: Reservation;




  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private serviceRestaurant: RestaurantsService,
    private serviceTypeRestaurant: TypeRestaurantService,
    private serviceReservation : ReservationService
  ) {
    this.id = activatedRoute.snapshot.params['id'];
    this.restaurant = new Restaurant();
    this.typeRestaurant = new TypeRestaurant();

    serviceRestaurant.getById(this.id).subscribe((data) => {
      Object.assign(this.restaurant, data);

      this.serviceTypeRestaurant.getById(data.typeId).subscribe((data) => {
        Object.assign(this.typeRestaurant, data);
      });
    });

    console.log('page show:' + this.restaurant);
    console.log(this.restaurant);

    this.init = new Reservation();
    this.init.restaurantId = this.id;
  }

  public action(item: Reservation): void {

    this.serviceReservation.add(item).subscribe(() => {
    
    
    });
    
     }
}
