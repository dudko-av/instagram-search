import { Component } from '@angular/core';
import { AppStoreService } from './shared/app-store/app-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private store: AppStoreService) { debugger
    store.user.get().subscribe(val => {
      debugger
    });
    store.user.set('test value');
    store.list.set('test list');
  }

}
