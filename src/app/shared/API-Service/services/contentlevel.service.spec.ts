import { TestBed } from '@angular/core/testing';

import { ContentlevelService } from './contentlevel.service';

describe('ContentlevelService', () => {
  let service: ContentlevelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentlevelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
