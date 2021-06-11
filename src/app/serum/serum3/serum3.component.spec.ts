import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Serum3Component } from './serum3.component';

describe('Serum3Component', () => {
  let component: Serum3Component;
  let fixture: ComponentFixture<Serum3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Serum3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Serum3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
