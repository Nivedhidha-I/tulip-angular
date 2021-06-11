import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Soap3Component } from './soap3.component';

describe('Soap3Component', () => {
  let component: Soap3Component;
  let fixture: ComponentFixture<Soap3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Soap3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Soap3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
