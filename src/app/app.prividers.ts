import { AccessTokenService } from './shared/app-state/model/access-token/access-token.service';
import { InstagramApiService } from './shared/instagram-api/instagram-api.service';

export const appProviders = [
  AccessTokenService,
  InstagramApiService
];
