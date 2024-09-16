import { TestBed } from '@angular/core/testing';

import { TemperatureService } from './temperature.service';

describe('TemperatureService', () => {
  let service: TemperatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemperatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should convert time correctly', () => {
    const time = '1880.88';
    const expectedTime = '11-1880';
    expect(service.convertTime(time)).toEqual(expectedTime);
  });
});
