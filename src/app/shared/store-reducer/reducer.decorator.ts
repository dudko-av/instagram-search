import { Action } from '@ngrx/store';

declare const Reflect: any;

export const appState = {};
export const appStateType = {};

export function Reducer() {
  return function (target: any, key: string) {
    const type = Reflect.getMetadata('design:type', target, key);
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
