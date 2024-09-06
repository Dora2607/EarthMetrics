import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const url = 'https://global-warming.org/api';

@Injectable({
  providedIn: 'root',
})
export class ClientAPIService {
  apiType!: string;

  constructor(private httpClient: HttpClient) {}

  getData<T>(apiType: string): Observable<T> {
    return this.httpClient.get<T>(`${url}/${apiType}-api`);
  }
}
