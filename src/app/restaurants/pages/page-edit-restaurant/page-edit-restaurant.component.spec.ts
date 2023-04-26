import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEditRestaurantComponent } from './page-edit-restaurant.component';

describe('PageEditRestaurantComponent', () => {
  let component: PageEditRestaurantComponent;
  let fixture: ComponentFixture<PageEditRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageEditRestaurantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageEditRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
