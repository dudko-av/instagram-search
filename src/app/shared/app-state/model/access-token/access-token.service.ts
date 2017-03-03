import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { LocalStorageService } from '../../../local-storage/local-storage.service';

@Injectable()
export class AccessTokenService {
  name = 'accessToken';

  constructor(
    private store: Store<any>,
    private localStorage: LocalStorageService
  ) {
    this.get().subscribe(token => {
      this.localStorage.set(this.name, token);
    });
    this.set(this.localStorage.get(this.name));
  }

  set(token: string) {
    this.store.dispatch({ type: `${this.name}.set`, payload: token });
  }

  get() {
    return this.store.select<string>(this.name);
  }

}
