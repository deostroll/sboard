import {bootstrap} from 'angular2/platform/browser';
import {provide, ComponentRef} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {NavService} from './app/services/navigation';
import {appInjector} from './app/services/app-injector';

// import {SeedApp} from './app/seed-app';

//
// bootstrap(SeedApp, [
//   HTTP_PROVIDERS,
//   ROUTER_PROVIDERS,
//   provide(LocationStrategy, {useClass: HashLocationStrategy})
// ])
// .catch(err => console.error(err));

import {ScrabbleApp} from './app/scrabble-app';
var svc = new NavService();
svc.id = 'from bootstrap';

bootstrap(ScrabbleApp, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy}),
  provide(NavService, {useValue: svc})
])
.then((appRef: ComponentRef) => {
  appInjector(appRef.injector);
})
.catch(err => console.error(err));
