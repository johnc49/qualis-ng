import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrbComponent } from './crb.component';

describe('CrbComponent', () => {
  let component: CrbComponent;
  let fixture: ComponentFixture<CrbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
