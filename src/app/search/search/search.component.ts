import { Component, OnInit } from '@angular/core';
import { InstagramApiService } from '../../shared/instagram-api/instagram-api.service';
import { AccessTokenService } from '../../shared/app-state/model/access-token/access-token.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(
    private api: InstagramApiService,
    private accessToken: AccessTokenService
  ) { }

  ngOnInit() {
    this.accessToken.get().switchMap(token => {
      return this.api.users('self/', { access_token: token });
    }).subscribe(res => {
      debugger
    });

  }

}
