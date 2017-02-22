import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class InstagramApiService {
  private apiEndpoint = 'https://api.instagram.com/v1/';

  constructor(
    private jsonp: Jsonp
  ) { }

  users(endpoint: string, params: any = {}) {
    const search = new URLSearchParams();
    Object.keys(params).forEach(key => {
      search.set(key, params[key]);
    });
    return this.jsonp.request(`${this.apiEndpoint}users/${endpoint}?callback=JSONP_CALLBACK`, { search })
      .map(res => res.json());
  }

}
