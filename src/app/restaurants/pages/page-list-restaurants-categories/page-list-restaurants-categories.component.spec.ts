import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListRestaurantsCategoriesComponent } from './page-list-restaurants-categories.component';

describe('PageListRestaurantsCategoriesComponent', () => {
  let component: PageListRestaurantsCategoriesComponent;
  let fixture: ComponentFixture<PageListRestaurantsCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListRestaurantsCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageListRestaurantsCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
