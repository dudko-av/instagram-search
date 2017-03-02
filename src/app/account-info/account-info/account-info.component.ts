import { Component, OnInit } from '@angular/core';
import { InstagramApiService } from '../../shared/instagram-api/instagram-api.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/pluck';

interface User {
  media: Media;
}

interface Media {
  count: number;
  nodes: any[];
  page_info: {
    end_cursor: string;
    has_next_page: boolean;
  };
}

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss']
})
export class AccountInfoComponent implements OnInit {
  mediaList = new BehaviorSubject<any[]>([]);
  account = new FormControl('bmw');

  constructor(
    private api: InstagramApiService
  ) { }

  ngOnInit() {
  }

  accountInfo() {
    this.api.accountInfo<User>(this.account.value)
      .pluck<any, User>('user')
      .subscribe(res => {
        debugger
        this.mediaList.next(res.media.nodes);
      }, err => {
        debugger
      });
  }

}
