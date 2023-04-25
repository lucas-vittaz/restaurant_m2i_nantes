import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconDarkComponent } from './icon-dark.component';

describe('IconDarkComponent', () => {
  let component: IconDarkComponent;
  let fixture: ComponentFixture<IconDarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconDarkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
