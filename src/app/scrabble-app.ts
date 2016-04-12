import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Board} from './components/board/board';
import {Json} from './components/json/viewer';
import {Navigation} from './components/navs/navs';

@Component({
  selector: 'scrabble-app',
  templateUrl: 'app/scrabble-app.html',
  directives: [Navigation, ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/home', component: Board, useAsDefault: true, name: 'Home'},
  {path: '/json', component: Board, name: 'Json'}
])
export class ScrabbleApp {

}
