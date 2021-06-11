import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bodybutter3Component } from './bodybutter3.component';

describe('Bodybutter3Component', () => {
  let component: Bodybutter3Component;
  let fixture: ComponentFixture<Bodybutter3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bodybutter3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bodybutter3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
