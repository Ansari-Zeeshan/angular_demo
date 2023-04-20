import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserSpecificComponent } from './browser-specific.component';

describe('BrowserSpecificComponent', () => {
  let component: BrowserSpecificComponent;
  let fixture: ComponentFixture<BrowserSpecificComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowserSpecificComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowserSpecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
