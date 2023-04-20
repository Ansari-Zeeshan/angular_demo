import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapSliderComponent } from './bootstrap-slider.component';

describe('BootstrapSliderComponent', () => {
  let component: BootstrapSliderComponent;
  let fixture: ComponentFixture<BootstrapSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootstrapSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
