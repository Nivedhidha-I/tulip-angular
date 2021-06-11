import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lipstick3Component } from './lipstick3.component';

describe('Lipstick3Component', () => {
  let component: Lipstick3Component;
  let fixture: ComponentFixture<Lipstick3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lipstick3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lipstick3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
