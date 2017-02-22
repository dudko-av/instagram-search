import { Component, OnInit } from '@angular/core';
import { InstagramApiService } from '../../shared/instagram-api/instagram-api.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/share';

interface Location {
  id: string;
  latitude: number;
  longitude: number;
  name: string;
}

interface Image {
  url: string;
  height: number;
  width: number;
}

interface SelfMedia {
  attribution: any;
  caption: any;
  comments: Object;
  created_time: string;
  filter: string;
  id: string;
  images: {
    low_resolution: Image
    standard_resolution: Image
    thumbnail: Image
  };
  likes: Object;
  link: string;
  location: Object;
  tags: any[];
  type: string;
  user: Object;
  user_has_liked: boolean;
  users_in_photo: number[];
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  lat: number = 50.440974;
  lng: number = 30.518184;
  locations: Location[];
  locationMediaContent: Location[];
  selfMedialList: Observable<SelfMedia[]>;

  constructor(
    private api: InstagramApiService
  ) { }

  ngOnInit() {
/*    this.api.request('users/self').subscribe(res => {
    });*/
/*    this.api.request('locations/search', { lat: this.lat, lng: this.lng }).subscribe(res => {
      debugger
      this.locations = res.data;
    });
    this.api.request('media/search', { lat: this.lat, lng: this.lng }).subscribe(res => {
      debugger
    }); */
    this.selfMedialList = this.api.request('users/self/media/recent', { lat: this.lat, lng: this.lng })
      .map(res => res.data).share();
    this.selfMedialList.subscribe(res => {
      // debugger
    });
  }

  getLocationMedia(location: Location) {
    this.api.request(`locations/${location.id}/media/recent`).subscribe(res => {
      this.locationMediaContent = res.data;
    });
    this.api.request('media/search', { lat: this.lat, lng: this.lng }).subscribe(res => {
    });
  }

  mapClick(ev: any) {
    this.lat = ev.coords.lat;
    this.lng = ev.coords.lng;
    this.api.request('locations/search', { lat: this.lat, lng: this.lng }).subscribe(res => {
      this.locations = res.data;
    });
    this.api.request('media/search', { lat: this.lat, lng: this.lng }).subscribe(res => {
    });
  }

}
