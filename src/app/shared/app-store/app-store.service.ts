import { Injectable, Injector, ReflectiveInjector } from '@angular/core';
import { DefaultReducer } from '../store-reducer/reducer/default-reducer';
import { AccessTokenService } from '../app-state/model/access-token/access-token.service';
import { Reducer } from '../store-reducer/reducer.decorator';

@Injectable()
export class AppStoreService {
  @Reducer() accessToken: AccessTokenService;
  @Reducer() user: DefaultReducer;
  @Reducer() list: DefaultReducer;

  constructor(injector: Injector) { debugger
  }

}
