import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lipstick1Component } from './lipstick1.component';

describe('Lipstick1Component', () => {
  let component: Lipstick1Component;
  let fixture: ComponentFixture<Lipstick1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lipstick1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lipstick1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
