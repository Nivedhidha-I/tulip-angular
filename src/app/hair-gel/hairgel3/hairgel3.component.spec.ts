import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hairgel3Component } from './hairgel3.component';

describe('Hairgel3Component', () => {
  let component: Hairgel3Component;
  let fixture: ComponentFixture<Hairgel3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hairgel3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Hairgel3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
