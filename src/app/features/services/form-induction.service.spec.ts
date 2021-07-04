import { TestBed } from '@angular/core/testing';

import { FormInductionService } from './form-induction.service';

describe('FormInductionService', () => {
  let service: FormInductionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormInductionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
