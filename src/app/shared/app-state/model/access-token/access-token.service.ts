import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { LocalStorageService } from '../../../local-storage/local-storage.service';

@Injectable()
export class AccessTokenService {

  constructor(
    private store: Store<any>,
    private localStorage: LocalStorageService
  ) {
    this.get().subscribe(token => {
      this.localStorage.set('accessToken', token);
    });
    this.set(this.localStorage.get('accessToken'));
  }

  set(token: string) {
    this.store.dispatch({ type: 'AccessTokenService.set', payload: token });
  }

  get() {
    return this.store.select<string>('accessToken');
  }

  static reducer(state: string, action: Action) {
    switch (action.type) {
      case 'AccessTokenService.set':
        return action.payload;

      default:
        return state;
    }
  }

}
