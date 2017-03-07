import { InstagramApiService } from './shared/instagram-api/instagram-api.service';
import { LocalStorageService } from './shared/local-storage/local-storage.service';
import { AppStoreService } from './shared/app-store/app-store.service';
import { Injector } from '@angular/core';
import { initialiseService } from './shared/ngrx-storage-module/app-storage.module';

export function initialiseStoreService(injector) {
  return initialiseService(injector, AppStoreService);
}

export const appProviders = [
  { provide: AppStoreService,
    useFactory: initialiseStoreService,
    deps: [Injector] },
  InstagramApiService,
  LocalStorageService
];

