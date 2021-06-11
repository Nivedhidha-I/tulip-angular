import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bodybutter4Component } from './bodybutter4.component';

describe('Bodybutter4Component', () => {
  let component: Bodybutter4Component;
  let fixture: ComponentFixture<Bodybutter4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bodybutter4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bodybutter4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
