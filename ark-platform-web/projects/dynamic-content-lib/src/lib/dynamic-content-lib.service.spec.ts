import { TestBed } from '@angular/core/testing';

import { DynamicContentLibService } from './dynamic-content-lib.service';

describe('DynamicContentLibService', () => {
  let service: DynamicContentLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicContentLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
