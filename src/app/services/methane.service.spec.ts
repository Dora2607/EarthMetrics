import { TestBed } from '@angular/core/testing';

import { MethaneService } from './methane.service';

describe('MethaneService', () => {
  let service: MethaneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MethaneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getMethaneParagraph should return a string', () => {
    const paragraph = service.getMethaneParagraph();
    expect(typeof paragraph).toBe('string');
  });

  it('getMethaneLegend should return a string', () => {
    const legend = service.getMethaneLegend();
    expect(typeof legend).toBe('string');
  });

});
