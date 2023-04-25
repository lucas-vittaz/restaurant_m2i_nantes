import { Component } from '@angular/core';
import { DarkModeService } from '../../services/dark-mode.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public dark$!: boolean;

  constructor(private darkModeService: DarkModeService) {
    // this.dark$ = this.darkModeService.dark$;
    this.darkModeService.dark$.subscribe((data) => {
      this.dark$ = data;
    });
  }
  public toggle(): void {
    this.darkModeService.toggle();
  }
}
