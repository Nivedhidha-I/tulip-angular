import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shampoo1Component } from './shampoo1.component';

describe('Shampoo1Component', () => {
  let component: Shampoo1Component;
  let fixture: ComponentFixture<Shampoo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Shampoo1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Shampoo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
