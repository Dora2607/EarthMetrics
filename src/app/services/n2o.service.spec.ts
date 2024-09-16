import { TestBed } from '@angular/core/testing';

import { N2oService } from './n2o.service';

describe('N2oService', () => {
  let service: N2oService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(N2oService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
