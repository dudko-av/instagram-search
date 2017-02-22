import { Routes } from '@angular/router';
import { SearchComponent } from './search/search/search.component';
import { AuthRedirectComponent } from './auth-redirect/auth-redirect/auth-redirect.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', component: AuthRedirectComponent },
  { path: 'auth-redirect/:token', component: AuthRedirectComponent },
  { path: 'search', component: SearchComponent }
];
