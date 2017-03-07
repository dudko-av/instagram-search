import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { appProviders } from './app.prividers';
import { appRoutes } from './app.routes';

import { AuthRedirectModule } from './auth-redirect/auth-redirect.module';
import { SearchModule } from './search/search.module';
import { AccountInfoModule } from './account-info/account-info.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppStorageModule } from './shared/ngrx-storage-module/app-storage.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, JsonpModule,
    RouterModule.forRoot(appRoutes),
    AppStorageModule.forRoot(),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
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
