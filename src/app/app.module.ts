import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { appProviders } from './app.prividers';
import { appRoutes } from './app.routes';
import { appState } from './shared/app-state/app.state';

import { AuthRedirectModule } from './auth-redirect/auth-redirect.module';
import { SearchModule } from './search/search.module';
import { AccountInfoModule } from './account-info/account-info.module';

import { StoreReducerModule } from './shared/store-reducer/store-reducer.module';
import { AppStoreService } from './shared/app-store/app-store.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, JsonpModule,
    RouterModule.forRoot(appRoutes),
    StoreReducerModule.forRoot(AppStoreService),
/*    StoreModule.provideStore(appState),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),*/
    MaterialModule,
    //
    AuthRedirectModule,
    SearchModule,
    AccountInfoModule
  ],
  providers: appProviders,
  bootstrap: [AppComponent]
})
export class AppModule { }
