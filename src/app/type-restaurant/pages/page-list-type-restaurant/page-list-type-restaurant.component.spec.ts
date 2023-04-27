import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListTypeRestaurantComponent } from './page-list-type-restaurant.component';

describe('PageListTypeRestaurantComponent', () => {
  let component: PageListTypeRestaurantComponent;
  let fixture: ComponentFixture<PageListTypeRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListTypeRestaurantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageListTypeRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
