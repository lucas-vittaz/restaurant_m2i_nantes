import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-icon-menu',
  templateUrl: './icon-menu.component.html',
  styleUrls: ['./icon-menu.component.scss'],
})
export class IconMenuComponent {
  public myIcon: IconDefinition;
  constructor() {
    this.myIcon = faHamburger;
  }
}
