import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';

@Injectable()
export class AccessTokenService {

  set(token: string) {
    this.store.dispatch({ type: 'AccessTokenService.set', payload: token });
  }

  get() {
    return this.store.select<string>('accessToken');
  }

  constructor(
    private store: Store<any>
  ) {
    debugger
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
