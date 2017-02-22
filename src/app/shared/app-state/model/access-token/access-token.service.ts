import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';

@Injectable()
export class AccessTokenService {

  constructor(
    private store: Store<any>
  ) { }

  static reducer(state: string, action: Action) { debugger
    switch (action.type) {
      default:
        return state;
    }
  }

}
