import { AccessTokenService } from './model/access-token/access-token.service';
import { createReducer } from './create-reducer';

export const appState = {
  accessToken: AccessTokenService.reducer,
  user: createReducer('user')
};
