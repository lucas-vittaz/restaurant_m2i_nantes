import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddRestaurantComponent } from './page-add-restaurant.component';

describe('PageAddRestaurantComponent', () => {
  let component: PageAddRestaurantComponent;
  let fixture: ComponentFixture<PageAddRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAddRestaurantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAddRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
