import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lipstick2Component } from './lipstick2.component';

describe('Lipstick2Component', () => {
  let component: Lipstick2Component;
  let fixture: ComponentFixture<Lipstick2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lipstick2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lipstick2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
