import { Component, Input } from '@angular/core';
import { Restaurant } from 'src/app/restaurants/models/restaurant';
import { TypeRestaurant } from 'src/app/type-restaurant/models/type-restaurant';
import { TypeRestaurantService } from 'src/app/type-restaurant/services/type-restaurant.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() public restaurant!: Restaurant;
  public type!: TypeRestaurant;

  constructor(private typeRestaurantService: TypeRestaurantService) {}

  ngOnInit(): void {
    console.log('test' + this.restaurant);
    this.type = new TypeRestaurant();
    this.typeRestaurantService
      .getById(this.restaurant.typeId)
      .subscribe((data) => {
        Object.assign(this.type, data);
      });
  }
}
