import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import { AccessTokenService } from '../app-state/model/access-token/access-token.service';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class InstagramApiService {
  private apiEndpoint = 'https://api.instagram.com/v1/';

  constructor(
    private jsonp: Jsonp,
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

}
