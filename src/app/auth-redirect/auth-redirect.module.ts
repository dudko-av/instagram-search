import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRedirectComponent } from './auth-redirect/auth-redirect.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AuthRedirectComponent],
  exports: [AuthRedirectComponent]
})
export class AuthRedirectModule { }
