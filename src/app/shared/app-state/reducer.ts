import { ActionReducer, Action } from '@ngrx/store';


export class Reducer {
  private name: string;

  constructor(...args) { debugger
  }

  set(val: any) { debugger
    return val;
  }

  action(state: any, action: Action) { debugger
    const [name, type] = action.type.split('.');
    if (name === this.name && this[type]) {
      return this[action.type](action.payload);
    }
    return state;
  }

}
