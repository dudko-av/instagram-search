import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';

@Injectable()
export class AppStateService {

  constructor(private store: Store<any>) { }

  select(name: string) {
    return this.store.select(name);
  }

  dispatch(type: string, payload: any) {
    this.store.dispatch({ type, payload });
  }

}
