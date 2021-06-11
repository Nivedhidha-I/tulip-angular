import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyButterComponent } from './body-butter.component';

describe('BodyButterComponent', () => {
  let component: BodyButterComponent;
  let fixture: ComponentFixture<BodyButterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyButterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyButterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
