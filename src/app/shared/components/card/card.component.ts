import { Component, Input } from '@angular/core';
import { Restaurant } from 'src/app/restaurants/models/restaurant';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() public restaurant!: Restaurant;
  constructor() {
  }

  ngOnInit(): void {
    console.log("test" + this.restaurant)
  }
}
