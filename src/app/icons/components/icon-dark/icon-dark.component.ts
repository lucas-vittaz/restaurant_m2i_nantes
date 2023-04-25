import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-dark',
  templateUrl: './icon-dark.component.html',
  styleUrls: ['./icon-dark.component.scss'],
})
export class IconDarkComponent {
  public myIcon: IconDefinition;
  constructor() {
    this.myIcon = faSun;
  }
}
