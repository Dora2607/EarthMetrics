import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Co2ApiResponse } from '../models/co2Data.model';
import { Observable } from 'rxjs';

const co2Url = 'https://global-warming.org/api/co2-api';

@Injectable({
  providedIn: 'root',
})
export class ClientAPIService {
  constructor(private httpClient: HttpClient) {}
  
  getCo2Data(): Observable<Co2ApiResponse> {
    return this.httpClient.get<Co2ApiResponse>(co2Url);
  }

}
