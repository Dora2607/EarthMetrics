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

  it('getN2oParagraph should return a string', () => {
    const paragraph = service.getN2oParagraph();
    expect(typeof paragraph).toBe('string');
  });

  it('getN2oLegend should return a string', () => {
    const legend = service.getN2oLegend();
    expect(typeof legend).toBe('string');
  });

});
