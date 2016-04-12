import {Injectable, EventEmitter} from 'angular2/core';

@Injectable()
export class NavService {
  id:string;
  private navChange : EventEmitter<string> = new EventEmitter();

  subscribe(f: Function) {
    return this.navChange.subscribe(f);
  }

  notify(name: string) {
    this.navChange.emit(name);
  }
}
