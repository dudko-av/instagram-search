import { Component, OnInit } from '@angular/core';
import { InstagramApiService } from '../../shared/instagram-api/instagram-api.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/pluck';
import { setMaxListeners } from 'cluster';

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

class Query {
  constructor (
    public q: string,
    public query_id: string,
    public ref: string
  ) { }
}

const tstReq = {
  q: "ig_user(3077136265) {↵  follows.first(20) {↵    count,↵    page_info {↵      end_cursor,↵      has_next_page↵    },↵    nodes {↵      id,↵      is_verified,↵      followed_by_viewer,↵      requested_by_viewer,↵      full_name,↵      profile_pic_url,↵      username↵    }↵  }↵}↵",
  query_id: "17867281162062470",
  ref: "relationships::follow_list"
};

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss']
})
export class AccountInfoComponent implements OnInit {
  mediaList = new BehaviorSubject<any[]>([]);
  account = new FormControl('anik_dani03');
  hashtags = new BehaviorSubject<string[]>([]);

  constructor(
    private api: InstagramApiService
  ) { }

  ngOnInit() {
    this.mediaList.map(list => {
      const regex = /(#[\w\d-]+)/gi;
      return list.reduce((acc, item) => {
        const res = (item.caption || '').match(regex) || [];
        res.forEach(hashtag => {
          let find = acc.filter(h => h.text === hashtag)[0];
          if (find) {
            find.count += 1;
          } else {
            find = {
              text: hashtag,
              count: 1
            };
            acc.push(find);
          }
        });
        return acc;
      }, []).sort((a, b) => b.count - a.count);
    }).subscribe(this.hashtags);
  }

  accountInfo() {
    this.api.accountInfo<User>(this.account.value)
      .pluck<any, User>('user')
      .subscribe(res => {
        this.mediaList.next(res.media.nodes);
      }, err => {
        debugger
      });

  }

  query() {
    this.api.query(tstReq).subscribe(res => {
      debugger
    });
  }

}
/*
 "ig_user(3077136265) {
 follows.first(20) {
 count,
 page_info {
 end_cursor,
 has_next_page
 },
 nodes {
 id,
 is_verified,
 followed_by_viewer,
 requested_by_viewer,
 full_name,
 profile_pic_url,
 username
 }
 }
 }
 "
 */


