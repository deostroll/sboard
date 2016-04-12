import {OnActivate} from 'angular2/router';
import {Injector, provide} from 'angular2/core';
import {NavService} from './../../services/navigation';
import {appInjector} from './../../services/app-injector';

export class NavigationComponent implements OnActivate {
  svc: NavService;
  constructor( private name: string) {
    console.log('component');
    console.log(this.name);
    
    let injector:Injector = appInjector();
    this.svc = injector.get(NavService);
    console.log(this.svc);
  }

  routerOnActivate() {
    this.svc.notify(this.name);
  }

  ngOnDestroy() {
    this.svc.notify(null);
  }
}
