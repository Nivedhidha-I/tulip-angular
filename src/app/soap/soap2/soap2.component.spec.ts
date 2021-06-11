import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Soap2Component } from './soap2.component';

describe('Soap2Component', () => {
  let component: Soap2Component;
  let fixture: ComponentFixture<Soap2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Soap2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Soap2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
