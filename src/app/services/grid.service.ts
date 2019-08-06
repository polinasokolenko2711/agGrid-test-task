import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GridService {

  constructor(private apiService: ApiService) { }

  /**
   * Getting data from API
   */
  getData(): Observable<any> {
    const queryParams = {
        params: {
        key: 'AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk',
        maxResults: '50',
        type: 'video',
        part: 'snippet',
        q: 'john'
      }
    };
    return this.apiService.get(queryParams);
  }
}
