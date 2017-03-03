import { NgModule, Injector, ReflectiveInjector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appState, appStateType } from './reducer.decorator';
import { DefaultReducer } from './reducer/default-reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.provideStore(appState),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
  ],
  declarations: [],
  exports: []
})
export class StoreReducerModule {
  static service: any;

  static forRoot(s) { debugger
    this.service = s;
    return {
      ngModule: StoreReducerModule,
      providers: [DefaultReducer]
    };
  }

  constructor(injector: Injector) {
    debugger
    const service = injector.get(StoreReducerModule.service);
    Object.keys(appStateType).forEach(reducer => {
      const test: DefaultReducer = ReflectiveInjector
        .resolveAndCreate([appStateType[reducer]], injector)
        .get(appStateType[reducer]);
      test.name = reducer;
      service[reducer] = test;
    });
  }

}
