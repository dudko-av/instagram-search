import { Injectable, Injector, ReflectiveInjector } from '@angular/core';
import { DefaultReducer } from '../app-state/default-reducer';
import { Store, Action } from '@ngrx/store';
import { AccessTokenService } from '../app-state/model/access-token/access-token.service';

declare const Reflect: any;

export const appState = {};
export const appStateType = {};

function Reducer() {
  return function (target: any, key: string) { debugger
    const type = Reflect.getMetadata('design:type', target, key);
    // console.log(`${key} type: ${type}`);
    appState[key] = (state: any, action: Action) => {
      switch (action.type) {
        case `${key}.set`:
          return action.payload;
        default:
          return state;
      }
    };
    appStateType[key] = type;
  };
}

@Injectable()
export class AppStoreService {
  @Reducer() accessToken: AccessTokenService;
  @Reducer() user: DefaultReducer;
  @Reducer() list: DefaultReducer;

  constructor(
    private store: Store<any>,
    private injector: Injector
  ) {
    Object.keys(appStateType).forEach(reducer => {
      const test: DefaultReducer = ReflectiveInjector.resolveAndCreate([appStateType[reducer]], injector)
        .get(appStateType[reducer]);
      test.name = reducer;
      this[reducer] = test;
      // appState[reducer] = test.reduce;
    });
  }

}
