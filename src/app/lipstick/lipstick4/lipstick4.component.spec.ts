import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lipstick4Component } from './lipstick4.component';

describe('Lipstick4Component', () => {
  let component: Lipstick4Component;
  let fixture: ComponentFixture<Lipstick4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lipstick4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lipstick4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
