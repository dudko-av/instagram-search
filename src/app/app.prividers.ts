import { AccessTokenService } from './shared/app-state/model/access-token/access-token.service';
import { InstagramApiService } from './shared/instagram-api/instagram-api.service';
import { LocalStorageService } from './shared/local-storage/local-storage.service';
import { AppStateService } from './shared/app-state/app-state.service';

export const appProviders = [
  AppStateService,
  AccessTokenService,
  InstagramApiService,
  LocalStorageService
];
