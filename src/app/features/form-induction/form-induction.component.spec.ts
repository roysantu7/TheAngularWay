import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInductionComponent } from './form-induction.component';

describe('FormInductionComponent', () => {
  let component: FormInductionComponent;
  let fixture: ComponentFixture<FormInductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormInductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
