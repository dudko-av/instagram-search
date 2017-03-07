import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams, Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { AppStoreService } from '../app-store/app-store.service';

@Injectable()
export class InstagramApiService {
  private apiEndpoint = 'https://api.instagram.com/v1/';

  constructor(
    private jsonp: Jsonp,
    private http: Http,
    private store: AppStoreService
  ) { }

  request(endpoint: string, params: any = {}) {
    return this.store.accessToken.get().first().switchMap(token => {
      const search = new URLSearchParams();
      search.set('access_token', token);
      Object.keys(params).forEach(key => {
        search.set(key, params[key]);
      });
      return this.jsonp.request(`${this.apiEndpoint}${endpoint}?callback=JSONP_CALLBACK`, { search })
        .map(res => res.json());
    });
  }

  query(data: any) {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post('/api/query', data, options)
      .map(res => res.json());
  }

  accountInfo<T>(username: string): Observable<T> {
    const search = new URLSearchParams();
    search.set('__a', '1');
    search.set('__b', '1');
    return this.http.get(`api/${username}/`, { search })
      .map<any, T>(res => res.json());
  }

}
