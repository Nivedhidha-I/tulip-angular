import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shampoo4Component } from './shampoo4.component';

describe('Shampoo4Component', () => {
  let component: Shampoo4Component;
  let fixture: ComponentFixture<Shampoo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Shampoo4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Shampoo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
