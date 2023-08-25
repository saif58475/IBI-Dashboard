import { TestBed } from '@angular/core/testing';

import { StudentcontentlevelService } from './studentsubcourse.service';

describe('StudentcontentlevelService', () => {
  let service: StudentcontentlevelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentcontentlevelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
