import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleTableComponent } from './toggle-table.component';

describe('ToggleTableComponent', () => {
  let component: ToggleTableComponent;
  let fixture: ComponentFixture<ToggleTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
