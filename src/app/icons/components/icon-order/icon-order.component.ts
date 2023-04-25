import { Component } from '@angular/core';
import { IconDefinition, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-order',
  templateUrl: './icon-order.component.html',
  styleUrls: ['./icon-order.component.scss']
})
export class IconOrderComponent {
  public myIcon: IconDefinition;
  constructor() {
    this.myIcon = faCalendarCheck;
  }
}
