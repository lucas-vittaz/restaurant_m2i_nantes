import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageShowRestaurantComponent } from './page-show-restaurant.component';

describe('PageShowRestaurantComponent', () => {
  let component: PageShowRestaurantComponent;
  let fixture: ComponentFixture<PageShowRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageShowRestaurantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageShowRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
