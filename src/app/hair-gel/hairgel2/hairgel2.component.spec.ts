import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hairgel2Component } from './hairgel2.component';

describe('Hairgel2Component', () => {
  let component: Hairgel2Component;
  let fixture: ComponentFixture<Hairgel2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hairgel2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Hairgel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
