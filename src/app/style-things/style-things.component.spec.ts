import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleThingsComponent } from './style-things.component';

describe('StyleThingsComponent', () => {
  let component: StyleThingsComponent;
  let fixture: ComponentFixture<StyleThingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleThingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleThingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
