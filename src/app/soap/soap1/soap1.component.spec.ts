import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Soap1Component } from './soap1.component';

describe('Soap1Component', () => {
  let component: Soap1Component;
  let fixture: ComponentFixture<Soap1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Soap1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Soap1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
