import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-instagram',
  templateUrl: './icon-instagram.component.html',
  styleUrls: ['./icon-instagram.component.scss']
})
export class IconInstagramComponent {
  public myIcon: IconDefinition;
  constructor() {
    this.myIcon = faHamburger;
  }
}
