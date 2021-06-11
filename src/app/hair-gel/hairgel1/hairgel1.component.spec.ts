import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hairgel1Component } from './hairgel1.component';

describe('Hairgel1Component', () => {
  let component: Hairgel1Component;
  let fixture: ComponentFixture<Hairgel1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hairgel1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Hairgel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
