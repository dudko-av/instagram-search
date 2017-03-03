import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';

@Injectable()
export class DefaultReducer {
  name: string;

  constructor(private store: Store<any>) {
    debugger
  }

  set(val: any) {
    this.store.dispatch({ type: `${this.name}.set`, payload: val });
  }

  get() {
    return this.store.select(this.name);
  }

  reduce(state: any, action: Action) {
    debugger
    return state;
  }

}
