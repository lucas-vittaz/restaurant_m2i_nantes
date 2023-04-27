import { Component, Input } from '@angular/core';
import { TypeRestaurant } from 'src/app/type-restaurant/models/type-restaurant';

@Component({
  selector: 'app-card-type',
  templateUrl: './card-type.component.html',
  styleUrls: ['./card-type.component.scss'],
})
export class CardTypeComponent {
  @Input() public typeRestaurant!: TypeRestaurant;
  constructor() {}
}
