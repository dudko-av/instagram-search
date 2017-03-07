import { Injectable } from '@angular/core';
import { Reducer } from '../ngrx-storage-module/reducer.decorator';
import { DefaultReducer } from '../ngrx-storage-module/default-reducer/default-reducer.service';

@Injectable()
export class AppStoreService {
  @Reducer() accessToken: DefaultReducer<string>;

  constructor() { }

}
