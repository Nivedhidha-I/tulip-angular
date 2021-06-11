import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bodybutter1Component } from './bodybutter1.component';

describe('Bodybutter1Component', () => {
  let component: Bodybutter1Component;
  let fixture: ComponentFixture<Bodybutter1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bodybutter1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bodybutter1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
