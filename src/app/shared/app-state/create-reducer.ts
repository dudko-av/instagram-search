import { ActionReducer, Action } from '@ngrx/store';

export enum dataType {
  STRING,
  OBJECT,
  ARRAY
}

export const reducerDataType = dataType;

export function createReducer(name: string) {
  return function (state: any, action: Action) {
    switch (action.type) {
      case `${name}.set`:
        return action.payload;
      default:
        return state;
    }
  };
}
