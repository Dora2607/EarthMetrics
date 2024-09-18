import { TestBed } from '@angular/core/testing';

import { Co2Service } from './co2.service';

describe('Co2Service', () => {
  let service: Co2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Co2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getCo2Paragraph should return a string', () => {
    const paragraph = service.getCo2Paragraph();
    expect(typeof paragraph).toBe('string');
  });

  it('getCo2Legend should return a string', () => {
    const legend = service.getCo2Legend();
    expect(typeof legend).toBe('string');
  });

});
