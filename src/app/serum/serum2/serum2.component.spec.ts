import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Serum2Component } from './serum2.component';

describe('Serum2Component', () => {
  let component: Serum2Component;
  let fixture: ComponentFixture<Serum2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Serum2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Serum2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
