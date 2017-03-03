import { AccessTokenService } from './shared/app-state/model/access-token/access-token.service';
import { InstagramApiService } from './shared/instagram-api/instagram-api.service';
import { LocalStorageService } from './shared/local-storage/local-storage.service';
import { AppStoreService } from './shared/app-store/app-store.service';
import { DefaultReducer } from './shared/app-state/default-reducer';
import { OpaqueToken } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

const REDUCER_VALUE_ACCESSOR: OpaqueToken = new OpaqueToken('SomeToken');

export const appProviders = [
  AppStoreService,
  DefaultReducer,
  AccessTokenService,
  InstagramApiService,
  LocalStorageService
];
