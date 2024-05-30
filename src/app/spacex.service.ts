import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpacexService {

  private baseUrl: string = 'https://api.spacexdata.com/v4';

  constructor(private http: HttpClient) { }

  getMissions(): Observable<any> {
    return this.http.get(`${this.baseUrl}/missions`);
  }

  getRockets(): Observable<any> {
    return this.http.get(`${this.baseUrl}/rockets`);
  }

  getLaunches(): Observable<any> {
    return this.http.get(`${this.baseUrl}/launches/upcoming`);
  }
}
