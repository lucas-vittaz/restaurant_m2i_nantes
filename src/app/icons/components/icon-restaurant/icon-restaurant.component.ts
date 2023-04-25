import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-restaurant',
  templateUrl: './icon-restaurant.component.html',
  styleUrls: ['./icon-restaurant.component.scss']
})
export class IconRestaurantComponent {
  public myIcon: IconDefinition;
  constructor() {
    this.myIcon = faUtensils;
  }
}
