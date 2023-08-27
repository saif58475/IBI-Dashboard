import { TestBed } from '@angular/core/testing';

import { StudentActivationsService } from './student-activations.service';

describe('StudentActivationsService', () => {
  let service: StudentActivationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentActivationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
