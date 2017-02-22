import { AccessTokenService } from './model/access-token/access-token.service';

export const appState = {
  accessToken: AccessTokenService.reducer
};
