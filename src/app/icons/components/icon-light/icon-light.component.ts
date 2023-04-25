import { Component } from '@angular/core';
import { IconDefinition, faMoon } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-light',
  templateUrl: './icon-light.component.html',
  styleUrls: ['./icon-light.component.scss'],
})
export class IconLightComponent {
  public myIcon: IconDefinition;
  constructor() {
    this.myIcon = faMoon;
  }
}
