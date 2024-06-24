import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL, MEGATRON_ENDPOINT } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  processData(secretName: string, inputString: string, operationType: string): Observable<any> {
    const body = {
      secret_name: secretName,
      input_string: inputString,
      operation_type: operationType
    };

    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(API_BASE_URL + MEGATRON_ENDPOINT, body, { headers, responseType: 'text' });
  }
}
