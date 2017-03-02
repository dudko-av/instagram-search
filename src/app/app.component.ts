import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateService } from './shared/app-state/app-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private state: AppStateService) { debugger
    this.state.select('user').subscribe(user => {
      debugger
    });
    this.state.dispatch('user.set', { data: 'any '});
  }

}
