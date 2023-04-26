import { TestBed } from '@angular/core/testing';

import { TypeRestaurantService } from './type-restaurant.service';

describe('TypeRestaurantService', () => {
  let service: TypeRestaurantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeRestaurantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
