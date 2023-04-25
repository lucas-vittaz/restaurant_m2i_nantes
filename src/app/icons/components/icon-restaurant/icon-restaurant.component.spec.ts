import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconRestaurantComponent } from './icon-restaurant.component';

describe('IconRestaurantComponent', () => {
  let component: IconRestaurantComponent;
  let fixture: ComponentFixture<IconRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconRestaurantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
