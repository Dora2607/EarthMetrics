import { TestBed } from '@angular/core/testing';

import { ClientAPIService } from './client-api.service';

describe('ClientAPIService', () => {
  let service: ClientAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
