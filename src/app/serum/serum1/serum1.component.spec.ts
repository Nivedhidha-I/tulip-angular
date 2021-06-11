import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Serum1Component } from './serum1.component';

describe('Serum1Component', () => {
  let component: Serum1Component;
  let fixture: ComponentFixture<Serum1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Serum1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Serum1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
