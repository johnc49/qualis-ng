import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccoutSetupProgressComponent } from './AccoutSetupProgressComponent';

describe('AccoutSetupProgressComponent', () => {
  let component: AccoutSetupProgressComponent;
  let fixture: ComponentFixture<AccoutSetupProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccoutSetupProgressComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccoutSetupProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
