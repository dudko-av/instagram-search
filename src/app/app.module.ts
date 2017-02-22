import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { appProviders } from './app.prividers';
import { appRoutes } from './app.routes';
import { appState } from './shared/app-state/app.state';

import { AuthRedirectModule } from './auth-redirect/auth-redirect.module';
import { SearchModule } from './search/search.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, JsonpModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.provideStore(appState),
    //
    AuthRedirectModule,
    SearchModule
  ],
  providers: appProviders,
  bootstrap: [AppComponent]
})
export class AppModule { }
