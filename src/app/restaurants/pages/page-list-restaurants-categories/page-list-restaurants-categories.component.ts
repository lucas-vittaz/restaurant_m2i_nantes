import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TypeRestaurant } from 'src/app/type-restaurant/models/type-restaurant';
import { TypeRestaurantService } from 'src/app/type-restaurant/services/type-restaurant.service';
import { Restaurant } from '../../models/restaurant';
import { RestaurantsService } from '../../services/restaurants.service';

@Component({
  selector: 'app-page-list-restaurants-categories',
  templateUrl: './page-list-restaurants-categories.component.html',
  styleUrls: ['./page-list-restaurants-categories.component.scss'],
})
export class PageListRestaurantsCategoriesComponent {
  public collection$: Observable<Restaurant[]>;
  public typeId: number;
  public types$: Observable<TypeRestaurant>;
  public typeNom!: string;

  constructor(
    private restaurantService: RestaurantsService,
    private typeRestaurantService: TypeRestaurantService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.typeId = this.activatedRoute.snapshot.params['id'];
    this.collection$ = this.restaurantService.getRestaurantByTypeId(
      this.typeId
    );
    this.types$ = this.typeRestaurantService.getById(this.typeId);
    this.types$.subscribe((data) => {
      this.typeNom = data.nom;
    })
  }
}
