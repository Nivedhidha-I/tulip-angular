import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shampoo3Component } from './shampoo3.component';

describe('Shampoo3Component', () => {
  let component: Shampoo3Component;
  let fixture: ComponentFixture<Shampoo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Shampoo3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Shampoo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
