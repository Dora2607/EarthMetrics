import { TestBed } from '@angular/core/testing';
import { ClientAPIService } from './client-api.service';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { TemperatureApiResponse } from '../models/temperatureData.model';

describe('ClientAPIService', () => {
  let service: ClientAPIService;
  let httpMock: HttpTestingController;
  const url = 'https://global-warming.org/api';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(ClientAPIService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected data', () => {
    const expectedData: TemperatureApiResponse = {
      error: null,
      result: [
        {
          time: '1880.04',
          station: '-0.28',
          land: '-0.20',
        },
      ],
    };

    service
      .getData<TemperatureApiResponse>('temperature')
      .subscribe((data) => expect(data).toEqual(expectedData));

    const req = httpMock.expectOne(`${url}/temperature-api`);
    expect(req.request.method).toEqual('GET');

    req.flush(expectedData);
  });

  it('should handle error correctly', () => {
    const errorMessage = 'Si è verificato un errore';
    service.getData('temperature').subscribe({
      next: () => fail('should have failed with the error'),
      error: (error) => {
        expect(error.message).toContain('Codice errore: 500');
        expect(error.message).toContain('Messaggio: Http failure response');
      },
    });
  
    const req = httpMock.expectOne(`${url}/temperature-api`);
    req.flush(errorMessage, { status: 500, statusText: 'Server Error' });
  });
});
