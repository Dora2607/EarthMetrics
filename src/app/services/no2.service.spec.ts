import { TestBed } from '@angular/core/testing';

import { No2Service } from './no2.service';

describe('No2Service', () => {
  let service: No2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(No2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
