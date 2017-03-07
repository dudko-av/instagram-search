import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppStoreService } from '../../shared/app-store/app-store.service';

@Component({
  selector: 'app-auth-redirect',
  templateUrl: './auth-redirect.component.html',
  styleUrls: ['./auth-redirect.component.css']
})
export class AuthRedirectComponent implements OnInit {
  clientId = 'bc60885131b24a0a99bbd5d8ddd10243';
  redirectUri = 'http://localhost:8889/auth-redirect/';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: AppStoreService
  ) { }

  ngOnInit() { debugger
    if (window.location.hash) {
      const accessToken = window.location.hash.split('=')[1];
      this.store.accessToken.set(accessToken);
      this.router.navigate(['/search']);
    } else {
      window.location.assign(
        `https://api.instagram.com/oauth/authorize/` +
        `?client_id=${this.clientId}&redirect_uri=${this.redirectUri}&response_type=token&scope=public_content`
      );
    }
  }

}
