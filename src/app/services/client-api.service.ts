import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

const url = 'https://global-warming.org/api';

@Injectable({
  providedIn: 'root',
})
export class ClientAPIService {
  apiType!: string;

  constructor(private httpClient: HttpClient) {}

  getData<T>(apiType: string): Observable<T> {
    return this.httpClient.get<T>(`${url}/${apiType}-api`).pipe(
      catchError(this.handleError)
    );
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private handleError(error: any): Observable<never> {
    let errorMessage = 'Si è verificato un errore';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Errore: ${error.error.message}`;
    } else {
      errorMessage = `Codice errore: ${error.status}\nMessaggio: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
