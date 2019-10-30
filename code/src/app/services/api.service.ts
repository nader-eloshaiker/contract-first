import {Injectable} from '@angular/core';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly _baseUrl: string;
  private readonly _headers: HttpHeaders;

  constructor() {
    this._headers = new HttpHeaders(
      {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      });

    this._baseUrl = 'https://petstore.swagger.io/v2';
  }

  get baseUrl() {
    return this._baseUrl;
  }

  get headers() {
    return this._headers;
  }
}
