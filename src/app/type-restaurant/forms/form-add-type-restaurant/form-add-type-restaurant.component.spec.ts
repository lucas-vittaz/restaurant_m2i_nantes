import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddTypeRestaurantComponent } from './form-add-type-restaurant.component';

describe('FormAddTypeRestaurantComponent', () => {
  let component: FormAddTypeRestaurantComponent;
  let fixture: ComponentFixture<FormAddTypeRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAddTypeRestaurantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAddTypeRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
