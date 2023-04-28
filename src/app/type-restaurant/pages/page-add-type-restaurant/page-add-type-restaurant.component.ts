import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TypeRestaurant } from '../../models/type-restaurant';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TypeRestaurantService } from '../../services/type-restaurant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-add-type-restaurant',
  templateUrl: './page-add-type-restaurant.component.html',
  styleUrls: ['./page-add-type-restaurant.component.scss'],
})
export class PageAddTypeRestaurantComponent {
  public typeRestaurant: TypeRestaurant;

  constructor(
    private typeRestaurantService: TypeRestaurantService,
    private router: Router
  ) {
    this.typeRestaurant = new TypeRestaurant();
  }

  public action(typeRestaurant: TypeRestaurant) {
    this.typeRestaurantService.add(typeRestaurant).subscribe(() => {
      this.router.navigate(['type-restaurants']);
    });
  }
}
