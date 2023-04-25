import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconLightComponent } from './icon-light.component';

describe('IconLightComponent', () => {
  let component: IconLightComponent;
  let fixture: ComponentFixture<IconLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconLightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
