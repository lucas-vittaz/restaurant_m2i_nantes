import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListReservationsComponent } from './page-list-reservations.component';

describe('PageListReservationsComponent', () => {
  let component: PageListReservationsComponent;
  let fixture: ComponentFixture<PageListReservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListReservationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageListReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
