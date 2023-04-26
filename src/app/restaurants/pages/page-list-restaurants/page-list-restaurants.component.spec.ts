import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListRestaurantsComponent } from './page-list-restaurants.component';

describe('PageListRestaurantsComponent', () => {
  let component: PageListRestaurantsComponent;
  let fixture: ComponentFixture<PageListRestaurantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListRestaurantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageListRestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
