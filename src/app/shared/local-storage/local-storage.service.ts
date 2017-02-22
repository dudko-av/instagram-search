import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() { }

  set(key: string, val: any) {
    if (typeof val === 'object') {
      window.localStorage.setItem(key, JSON.stringify(val));
    } else if (val) {
      window.localStorage.setItem(key, val);
    }
  }

  get(key: string) {
    try {
      return JSON.parse(window.localStorage.getItem(key));
    } catch (ex) {
      return window.localStorage.getItem(key);
    }
  }

}
