import { TestBed } from '@angular/core/testing';

import { ArcticService } from './arctic.service';

describe('ArcticService', () => {
  let service: ArcticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArcticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
