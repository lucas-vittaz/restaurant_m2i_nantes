import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TypeRestaurant } from '../../models/type-restaurant';
import { TypeRestaurantService } from '../../services/type-restaurant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-list-type-restaurant',
  templateUrl: './page-list-type-restaurant.component.html',
  styleUrls: ['./page-list-type-restaurant.component.scss'],
})
export class PageListTypeRestaurantComponent {
  public collection$: BehaviorSubject<TypeRestaurant[]>;
  constructor(
    private typeRestaurantService: TypeRestaurantService,
    private router: Router
  ) {
    this.collection$ = this.typeRestaurantService.collection$;
  }

  ngOnInit() {
    this.typeRestaurantService.refreshCollection();
  }
}
