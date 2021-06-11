import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Serum4Component } from './serum4.component';

describe('Serum4Component', () => {
  let component: Serum4Component;
  let fixture: ComponentFixture<Serum4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Serum4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Serum4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
