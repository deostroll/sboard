import {OnActivate} from 'angular2/router';
import {Injector, provide} from 'angular2/core';
import {NavService} from './../../services/navigation';
import {appInjector} from './../../services/app-injector';

export class NavigationComponent implements OnActivate {
  svc: NavService;
  constructor( private name: string) {
    console.log('component');
    console.log(this.name);
    // var injector = Injector.resolveAndCreate([
    //   NavService
    //   // provide(NavService, {useExisting: NavService})
    // ]);
    // console.log(NavService, Injector, provide);
    // this.svc = injector.get(NavService);
    // console.log(this.svc.id);

    // var bindings = Injector.resolve([
    //   provide(NavService, {useExisting: NavService})
    // ]);
    //
    // var svc = Injector.fromResolvedBindings(bindings).get(NavService);
    // console.log(this.svc);

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
