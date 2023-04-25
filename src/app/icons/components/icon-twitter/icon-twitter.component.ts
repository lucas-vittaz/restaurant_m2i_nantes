import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-twitter',
  templateUrl: './icon-twitter.component.html',
  styleUrls: ['./icon-twitter.component.scss']
})
export class IconTwitterComponent {
  public myIcon: IconDefinition;
  constructor() {
    this.myIcon = faHamburger;
  }
}
