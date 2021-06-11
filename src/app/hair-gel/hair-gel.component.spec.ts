import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HairGelComponent } from './hair-gel.component';

describe('HairGelComponent', () => {
  let component: HairGelComponent;
  let fixture: ComponentFixture<HairGelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HairGelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HairGelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
