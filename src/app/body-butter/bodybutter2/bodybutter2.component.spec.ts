import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bodybutter2Component } from './bodybutter2.component';

describe('Bodybutter2Component', () => {
  let component: Bodybutter2Component;
  let fixture: ComponentFixture<Bodybutter2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bodybutter2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bodybutter2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
