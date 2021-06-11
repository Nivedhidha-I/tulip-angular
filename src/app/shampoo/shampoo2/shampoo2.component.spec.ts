import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shampoo2Component } from './shampoo2.component';

describe('Shampoo2Component', () => {
  let component: Shampoo2Component;
  let fixture: ComponentFixture<Shampoo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Shampoo2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Shampoo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
