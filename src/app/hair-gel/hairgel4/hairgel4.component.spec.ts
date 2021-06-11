import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hairgel4Component } from './hairgel4.component';

describe('Hairgel4Component', () => {
  let component: Hairgel4Component;
  let fixture: ComponentFixture<Hairgel4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hairgel4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Hairgel4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
