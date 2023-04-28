import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddTypeRestaurantComponent } from './page-add-type-restaurant.component';

describe('PageAddTypeRestaurantComponent', () => {
  let component: PageAddTypeRestaurantComponent;
  let fixture: ComponentFixture<PageAddTypeRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAddTypeRestaurantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAddTypeRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
