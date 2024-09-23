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

  it('should return the correct HTML content based on the key', () => {
    const htmlContentMock = {
      temperature: {
        title: 'Temperature Title',
        paragraph: 'Temperature Paragraph',
        legend: 'Temperature Legend',
      },
      'nitrous-oxide': {
        title: 'Nitrous Oxide Title',
        paragraph: 'Nitrous Oxide Paragraph',
        legend: 'Nitrous Oxide Legend',
      },
      methane: {
        title: 'Methane Title',
        paragraph: 'Methane Paragraph',
        legend: 'Methane Legend',
      },
      co2: {
        title: 'CO2 Title',
        paragraph: 'CO2 Paragraph',
        legend: 'CO2 Legend',
      },
      arctic: {
        title: 'Arctic Title',
        paragraph: 'Arctic Paragraph',
        legend: 'Arctic Legend',
      },
    };
    service['htmlContent'] = htmlContentMock;
    expect(service.getHtmlContent('temperature')).toEqual(
      htmlContentMock['temperature'],
    );
    expect(service.getHtmlContent('nitrous-oxide')).toEqual(
      htmlContentMock['nitrous-oxide'],
    );
    expect(service.getHtmlContent('methane')).toEqual(
      htmlContentMock['methane'],
    );
    expect(service.getHtmlContent('co2')).toEqual(htmlContentMock['co2']);
    expect(service.getHtmlContent('arctic')).toEqual(htmlContentMock['arctic']);
    expect(service.getHtmlContent('unknown-key')).toBeUndefined();
  });

  it('should convert time correctly', () => {
    const time = '1880.88';
    const expectedTime = '11-1880';
    expect(service.convertTime(time)).toEqual(expectedTime);
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
