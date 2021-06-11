import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Soap4Component } from './soap4.component';

describe('Soap4Component', () => {
  let component: Soap4Component;
  let fixture: ComponentFixture<Soap4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Soap4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Soap4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
