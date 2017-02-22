import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InstagramApiService {
  private apiEndpoint = 'https://api.instagram.com/v1/';

  constructor(
    private http: Http
  ) { }

  users(endpoint: string) {
    return this.http.get(`${this.apiEndpoint}users/${endpoint}`);
  }

}
