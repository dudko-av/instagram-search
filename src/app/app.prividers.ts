import { AccessTokenService } from './shared/app-state/model/access-token/access-token.service';
import { InstagramApiService } from './shared/instagram-api/instagram-api.service';
import { LocalStorageService } from './shared/local-storage/local-storage.service';
import { AppStoreService } from './shared/app-store/app-store.service';

export const appProviders = [
  AppStoreService,
  AccessTokenService,
  InstagramApiService,
  LocalStorageService
];
