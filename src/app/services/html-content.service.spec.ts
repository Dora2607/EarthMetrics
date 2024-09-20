import { TestBed } from '@angular/core/testing';

import { HtmlContentService } from './html-content.service';

describe('HtmlContentService', () => {
  let service: HtmlContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HtmlContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('getTemperatureParagraph should return a string', () => {
  //   const paragraph = service.getTemperatureParagraph();
  //   expect(typeof paragraph).toBe('string');
  // });

  // it('getTemperatureLegend should return a string', () => {
  //   const legend = service.getTemperatureLegend();
  //   expect(typeof legend).toBe('string');
  // });

  it('should convert time correctly', () => {
    const time = '1880.88';
    const expectedTime = '11-1880';
    expect(service.convertTime(time)).toEqual(expectedTime);
  });
});
