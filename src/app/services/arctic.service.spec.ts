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

  it('getArcticParagraph should return a string', () => {
    const paragraph = service.getArcticParagraph();
    expect(typeof paragraph).toBe('string');
  });

  it('getArcticLegend should return a string', () => {
    const legend = service.getArcticLegend();
    expect(typeof legend).toBe('string');
  });

  it('should convert the data to the correct type', () => {
    const data = {
      '197901': {
        value: 20.81,
        anom: 1.79,
        monthlyMean: 19.02,
      },
    };
    const expectedData = [
      {
        key: '01-1979',
        value: 20.81,
        anom: 1.79,
        monthlyMean: 19.02,
      },
    ];

    expect(service.extractData(data)).toEqual(expectedData);
  });
});
