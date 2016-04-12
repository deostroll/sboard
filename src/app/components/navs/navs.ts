import {Component} from 'angular2/core';
import {NavService} from './../../services/navigation';
import {Star} from './star';
import {RouterLink} from 'angular2/router';

@Component({
  selector: 'navs',
  template: `
  <a [routerLink]="['Home']">Home</a>
  <star [if]="current === 'home'"></star>
  |
  <a [routerLink]="['Json']">JSON</a>
  <star [if]="current === 'json'"></star>
  `,
  directives: [Star, RouterLink]
})
export class Navigation {
  current: string;
  constructor(svc: NavService) {
    console.log('nav1', svc.id);
    svc.subscribe((vw) => this.current = vw );
  }
}
