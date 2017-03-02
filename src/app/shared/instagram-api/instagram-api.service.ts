import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams, Http } from '@angular/http';
import { AccessTokenService } from '../app-state/model/access-token/access-token.service';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs';

@Injectable()
export class InstagramApiService {
  private apiEndpoint = 'https://api.instagram.com/v1/';

  constructor(
    private jsonp: Jsonp,
    private http: Http,
    private accessToken: AccessTokenService
  ) { }

  request(endpoint: string, params: any = {}) {
    return this.accessToken.get().first().switchMap(token => {
      const search = new URLSearchParams();
      search.set('access_token', token);
      Object.keys(params).forEach(key => {
        search.set(key, params[key]);
      });
      return this.jsonp.request(`${this.apiEndpoint}${endpoint}?callback=JSONP_CALLBACK`, { search })
        .map(res => res.json());
    });
  }

  accountInfo<T>(username: string): Observable<T> {
    const search = new URLSearchParams();
    search.set('__a', '1');
    search.set('__b', '1');
    return this.http.get(`api/${username}/`, { search })
      .map<any, T>(res => res.json());
  }

}
