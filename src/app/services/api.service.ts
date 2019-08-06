import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = 'https://www.googleapis.com/youtube/v3/search';

  constructor(private httpClient: HttpClient) { }

  /**
   * Method creates get request
   * @param params
   */
  get(params?): Observable<any> {
      return this.httpClient.get(this.url, params);
  }
}
