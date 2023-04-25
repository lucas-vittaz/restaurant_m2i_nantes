import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-facebook',
  templateUrl: './icon-facebook.component.html',
  styleUrls: ['./icon-facebook.component.scss']
})
export class IconFacebookComponent {
  public myIcon: IconDefinition;
  constructor() {
    this.myIcon = faHamburger;
  }
}
